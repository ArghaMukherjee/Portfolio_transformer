import { useEffect, useRef } from 'react'
import './TransformerBackground.css'

function TransformerBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Neural network nodes
        const nodes = []
        const nodeCount = 30
        const maxDistance = 200

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                pulsePhase: Math.random() * Math.PI * 2
            })
        }

        // Data packets flowing between nodes
        const dataPackets = []

        const createDataPacket = () => {
            if (dataPackets.length > 20) return
            const fromNode = nodes[Math.floor(Math.random() * nodes.length)]
            const toNode = nodes[Math.floor(Math.random() * nodes.length)]
            if (fromNode === toNode) return

            dataPackets.push({
                fromX: fromNode.x,
                fromY: fromNode.y,
                toX: toNode.x,
                toY: toNode.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.02
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Update position
                node.x += node.vx
                node.y += node.vy
                node.pulsePhase += 0.02

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1

                // Draw connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j]
                    const dx = other.x - node.x
                    const dy = other.y - node.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * 0.15
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(220, 20, 60, ${alpha})`
                        ctx.lineWidth = 1
                        ctx.moveTo(node.x, node.y)
                        ctx.lineTo(other.x, other.y)
                        ctx.stroke()
                    }
                }

                // Draw node with pulse
                const pulse = Math.sin(node.pulsePhase) * 0.3 + 1
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(220, 20, 60, ${0.4 + Math.sin(node.pulsePhase) * 0.2})`
                ctx.fill()

                // Outer glow
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.radius * 4
                )
                gradient.addColorStop(0, 'rgba(220, 20, 60, 0.2)')
                gradient.addColorStop(1, 'rgba(220, 20, 60, 0)')
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()
            })

            // Update and draw data packets
            for (let i = dataPackets.length - 1; i >= 0; i--) {
                const packet = dataPackets[i]
                packet.progress += packet.speed

                if (packet.progress >= 1) {
                    dataPackets.splice(i, 1)
                    continue
                }

                const x = packet.fromX + (packet.toX - packet.fromX) * packet.progress
                const y = packet.fromY + (packet.toY - packet.fromY) * packet.progress

                // Draw packet with trail
                const trailLength = 5
                for (let t = 0; t < trailLength; t++) {
                    const trailProgress = Math.max(0, packet.progress - t * 0.02)
                    const tx = packet.fromX + (packet.toX - packet.fromX) * trailProgress
                    const ty = packet.fromY + (packet.toY - packet.fromY) * trailProgress

                    ctx.beginPath()
                    ctx.arc(tx, ty, 2 - t * 0.3, 0, Math.PI * 2)
                    ctx.fillStyle = `rgba(220, 20, 60, ${0.8 - t * 0.15})`
                    ctx.fill()
                }
            }

            // Occasionally create new data packets
            if (Math.random() < 0.02) {
                createDataPacket()
            }

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <div className="transformer-bg">
            {/* Hexagonal Grid */}
            <div className="hex-grid"></div>

            {/* Neural Network Canvas */}
            <canvas ref={canvasRef} className="neural-canvas"></canvas>

            {/* Circuit Lines */}
            <div className="circuit-lines">
                <div className="circuit-line"></div>
                <div className="circuit-line"></div>
                <div className="circuit-line"></div>
                <div className="circuit-line"></div>
            </div>

            {/* Data Nodes */}
            <div className="data-nodes">
                <div className="data-node"></div>
                <div className="data-node"></div>
                <div className="data-node"></div>
                <div className="data-node"></div>
                <div className="data-node"></div>
                <div className="data-node"></div>
            </div>
        </div>
    )
}

export default TransformerBackground
