import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About Me</CardTitle>
            <CardDescription>Web3 Developer & Blockchain Enthusiast</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              I'm Kaushik Chandra, a passionate Web3 and blockchain BUILDER with extensive experience in
              the cryptocurrency ecosystem. I specialize in analyzing blockchain projects, developing growth strategies,
              and contributing to the decentralized future. My goal is to leverage my expertise in Web3, DeFi, and
              blockchain technology to drive innovation and create value in the crypto space.
            </p>
            <p className="text-lg font-semibold">
              Currently, I lead BTC ecosystem investments at 3poch Labs. We are a $15M Liquid crypto fund and research
              lab looking to support projects extensively.
            </p>

            <h2>Experience</h2>
            <p>Details about my experience...</p>

            <h2>Skills</h2>
            <p>Details about my skills...</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

