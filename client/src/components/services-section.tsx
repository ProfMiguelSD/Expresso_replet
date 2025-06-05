import { Link } from "wouter";
import { BookOpen, GraduationCap, PenTool, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "creche",
    title: "Creche",
    subtitle: "0 a 3 anos",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700"
  },
  {
    id: "pre-escola",
    title: "Pré-Escola",
    subtitle: "4 a 5 anos",
    icon: GraduationCap,
    color: "from-green-500 to-green-600",
    hoverColor: "group-hover:from-green-600 group-hover:to-green-700"
  },
  {
    id: "anos-iniciais",
    title: "Anos Iniciais",
    subtitle: "1º ao 5º ano",
    icon: PenTool,
    color: "from-purple-500 to-purple-600",
    hoverColor: "group-hover:from-purple-600 group-hover:to-purple-700"
  },
  {
    id: "anos-finais",
    title: "Anos Finais",
    subtitle: "6º ao 9º ano",
    icon: BarChart3,
    color: "from-orange-500 to-orange-600",
    hoverColor: "group-hover:from-orange-600 group-hover:to-orange-700"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha a Etapa de Ensino
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecione o segmento educacional para acessar o formulário específico
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.id} href={`/form/${service.id}`}>
                <Card className="cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-br ${service.color} ${service.hoverColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.subtitle}
                    </p>
                    <div className="bg-primary text-white px-6 py-3 rounded-lg group-hover:bg-primary-dark transition-colors duration-300">
                      Acessar Formulário
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
