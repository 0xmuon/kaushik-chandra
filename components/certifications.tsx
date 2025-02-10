import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    title: "Advanced Trading Algorithms",
    issuer: "Indian School of Business",
    date: "Sep 2020",
  },
  {
    title: "Advanced Business Strategy",
    issuer: "University of Virginia Darden School of Business",
    date: "Aug 2020",
  },
  {
    title: "Trading Algorithms",
    issuer: "Indian School of Business",
    date: "Aug 2020",
  },
  {
    title: "Startup Valuation Methods",
    issuer: "Duke University - The Fuqua School of Business",
    date: "Apr 2020",
  },
  {
    title: "Financial Markets",
    issuer: "Yale University",
    date: "Mar 2020",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Issued: {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

