import * as ftp from "basic-ftp";
import dotenv from "dotenv";
import * as path from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "dist");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    if (!process.env.FTP_HOST || !process.env.FTP_USER || !process.env.FTP_PASSWORD) {
        console.error("❌ FTP credentials are not fully set in .env!");
        process.exit(1);
    }

    try {
        console.log("🔌 Connecting to GoDaddy FTP Server...");
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: false // Usually GoDaddy uses standard FTP or explicit FTPS on port 21 without strict TLS initially
        });

        console.log("📁 Connected! Navigating to public_html/ ...");
        // You might need to adjust this path depending on your GoDaddy cPanel setup
        // Common paths: "/public_html" or just "/"
        const targetDir = process.env.FTP_PATH || "/public_html";
        
        try {
            await client.cd(targetDir);
        } catch (err) {
            console.error(`Failed to cd into ${targetDir}. Setting remote directory to root `/`.`);
            await client.cd("/");
        }

        console.log("⬆️ Uploading the 'dist' folder contents...");
        
        // This clears the remote directory first. CAUTION: Only uncomment if you are certain!
        // await client.clearWorkingDir();
        
        await client.uploadFromDir(distPath);

        console.log("✅ Deployment to GoDaddy was successful!");
    } catch (err) {
        console.error("❌ FTP Deployment Failed:", err);
    }

    client.close();
}

deploy();
