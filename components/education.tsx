import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>National Institute of Technology Surat</CardTitle>
            <CardDescription>Integrated MSc., Applied Physics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2019 - 2024</p>
            <p>Grade: 7.90</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

