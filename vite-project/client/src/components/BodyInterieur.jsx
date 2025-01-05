import { Car, Shield, Clock, SprayCan, Heart, Plus } from 'lucide-react';
import '../styles/bodyinterieur.css'

function BodyInterieur() {
  const services = [
    {
      title: "Formule Standard - 30€",
      features: [
        "Aspiration complète de l'habitacle",
        "Dégraissage et Nettoyage tableau de bord",
        "Nettoyage des vitres intérieures",
      ],
      icon: Car
    },
    {
      title: "Formule Premium - 60€",
      features: [
        "Aspiration complète de l'habitacle",
        "Dégraissage et Nettoyage tableau de bord",
        "Nettoyage des vitres intérieures",
        "Shampoing des sièges et moquettes"
      ],
      icon: Shield
    },
    {
      title: "Formule Complète - 60€",
      features: [
        "Céramique textile",
        "Traitement anti-bactérien",
        "Protection longue durée",
        "Détachage profond"
      ],
      icon: SprayCan
    }
  ];

  const benefits = [
    {
      title: "Durée d'intervention",
      text: "1h30 - 3h selon formule",
      icon: Clock
    },
    {
      title: "Satisfaction garantie",
      text: "Service professionnel",
      icon: Heart
    }
  ];

  const supplements = [
    {
      title: "SUV/4x4",
      price: "10€"
    },
    {
      title: "Poil d'animaux",
      price: "10€"
    },
    {
      title: "Véhicule très sale",
      price: "20€"
    },
    {
        title: "Moisissure dans les Véhicules",
        price: "20€"
      },
      {
        title: " Traitement des Cuir",
        price: "20€"
      },
      {
        title: "Désinfection Climatisation et Habitacle ",
        price: " 20€"
      }
    ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Nos Services de Nettoyage Intérieur
      </h2>
      
      {/* Services Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <service.icon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
         {/* Supplements Section */}
         <div className="mt-12">
        <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
          Suppléments Disponibles
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {supplements.map((supplement, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex  items-center justify-center, text-center">
              <div className="flex items-center">
                <Plus className="w-5 h-5 text-blue-600 mr-3" />
                <span>{supplement.title}</span>
              </div>
              <span className="font-semibold text-blue-600">{supplement.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center bg-blue-50 p-4 rounded-lg">
            <benefit.icon className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h4 className="font-semibold">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default BodyInterieur;