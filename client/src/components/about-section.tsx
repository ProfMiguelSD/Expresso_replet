import { Check, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Personalização Completa",
    description: "Cada relatório é elaborado especificamente para as necessidades e características individuais de cada aluno."
  },
  {
    title: "Expertise Educacional",
    description: "Desenvolvido por profissional com vasta experiência em todas as etapas da Educação Básica."
  },
  {
    title: "Entrega Rápida",
    description: "Processo otimizado para garantir a entrega dos relatórios no menor tempo possível."
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Por que escolher nossos relatórios?
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-accent rounded-full p-2 flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Prof. Miguel Dourado
                </h3>
                <p className="text-gray-600 mb-6">
                  Especialista em Educação Básica com anos de experiência na elaboração de relatórios pedagógicos personalizados.
                </p>
                <div className="bg-gradient-to-r from-accent to-green-600 text-white px-6 py-3 rounded-lg">
                  Educador Certificado
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
