import { useParams } from "wouter";
import { useLocation } from "wouter";
import { ArrowLeft, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useFormProtection } from "@/hooks/use-form-protection";
import { useEffect } from "react";

const segmentData = {
  creche: {
    title: "Creche (0 a 3 anos)",
    color: "blue",
    description: "Preencha as informações para solicitar o relatório pedagógico personalizado para creche.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScDk-z5J5iS8qQdNQUd3HNrB1yxbCGStHGcvsxONaZ4EIhwaw/viewform?embedded=true",
    height: "4626"
  },
  "pre-escola": {
    title: "Pré-Escola (4 a 5 anos)",
    color: "green",
    description: "Preencha as informações para solicitar o relatório pedagógico personalizado para pré-escola.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfn6QnqfQ9yBjSJoFnZckj6MYfBOrdTu_XCVuz5w9y8CgIEqQ/viewform?embedded=true",
    height: "4773"
  },
  "anos-iniciais": {
    title: "Anos Iniciais (1º ao 5º ano)",
    color: "purple",
    description: "Preencha as informações para solicitar o relatório pedagógico personalizado para anos iniciais.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdBoPwrRCi5zxYQydKjFt7hB5Ia3EWXw2-haoE9C2RGHvnGOw/viewform?embedded=true",
    height: "9607"
  },
  "anos-finais": {
    title: "Anos Finais (6º ao 9º ano)",
    color: "orange",
    description: "Preencha as informações para solicitar o relatório pedagógico personalizado para anos finais.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdBoPwrRCi5zxYQydKjFt7hB5Ia3EWXw2-haoE9C2RGHvnGOw/viewform?embedded=true",
    height: "9607"
  }
};

export default function FormPage() {
  const { segment } = useParams<{ segment: string }>();
  const [, setLocation] = useLocation();
  
  const segmentInfo = segmentData[segment as keyof typeof segmentData];
  
  // Enable form protection when component mounts
  useFormProtection();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!segmentInfo) {
    setLocation("/");
    return null;
  }

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700"
  };

  const iconColorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 no-select form-protection">
      {/* Protected overlay */}
      <div className="protected-overlay fixed inset-0 bg-transparent pointer-events-none z-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => setLocation("/")}
                className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200 mb-4 p-0"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Formulário - {segmentInfo.title}
              </h1>
              <p className="text-gray-600">
                {segmentInfo.description}
              </p>
            </div>
            
            <div className={`${colorClasses[segmentInfo.color as keyof typeof colorClasses]} border rounded-lg p-6 mb-8`}>
              <div className="flex items-center mb-3">
                <Info className={`w-6 h-6 ${iconColorClasses[segmentInfo.color as keyof typeof iconColorClasses]} mr-3`} />
                <h3 className="font-semibold">Formulário Google Forms</h3>
              </div>
              <p className="mb-4">
                O formulário será carregado abaixo. Todas as informações são protegidas e confidenciais.
              </p>
              
              {/* Google Form Embed Area */}
              <div className="bg-white rounded-lg shadow-inner p-2">
                <iframe 
                  src={segmentInfo.formUrl}
                  width="100%" 
                  height={parseInt(segmentInfo.height)}
                  frameBorder={0} 
                  marginHeight="0" 
                  marginWidth="0"
                  title={`Formulário ${segmentInfo.title}`}
                  className="rounded-lg w-full no-select"
                  style={{
                    minHeight: `${segmentInfo.height}px`,
                    border: 'none',
                    userSelect: 'none',
                    pointerEvents: 'auto'
                  }}
                >
                  Carregando formulário...
                </iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
