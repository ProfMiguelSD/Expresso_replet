import { FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Relatório Pedagógico Expresso
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto animate-slide-up">
            Solicite relatórios pedagógicos personalizados, prontos para cada etapa da Educação Básica.
          </p>
          <div className="flex justify-center animate-slide-up">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 max-w-md border border-white/30">
              <div className="flex items-center justify-center mb-4">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <p className="text-white font-medium">
                Relatórios profissionais desenvolvidos por especialista em educação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
