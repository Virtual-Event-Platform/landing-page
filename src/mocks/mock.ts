import gaetan from "../assets/images/gaetan.jpg";
import arleme from "../assets/images/arleme.jpg";
import damia from "../assets/images/damia.jpg";
import raja from "../assets/images/raja.jpg";
import landry from "../assets/images/landry.jpg";


export const typedText = ["La plateforme 3D interactive qui ajoute une dimension supplémentaire à vos événements !"];

export const teamText = "Notre équipe est composée de jeunes talents motivés, spécialisés dans les nouvelles technologies et l'innovation. Dirigée par notre Product Manager orienté tech, nous avons également un chargé de Product Owner orienté UX qui travaille en étroite collaboration avec notre équipe de développement dédiée pour proposer des solutions innovantes et adaptées à vos besoins événementiels virtuels."

export const aboutText = "Découvrez une nouvelle dimension pour vos événements et augmentez le nombre de participants avec Zavoka - la plateforme 3D interactive qui offre une expérience immersive tout en attirant un public plus large et plus engagé.";

export const serviceText = "Zavoka offre une plateforme 3D interactive qui vous permet de personnaliser vos différents stands d'exposition, diffuser des vidéos simultanément dans une salle de conférence virtuelle et afficher les logos de vos partenaires à différents niveaux de visibilité pour créer un événement virtuel unique et engageant.";

export const pricingText = "Découvrez nos offres commerciales adaptées à vos besoins et à la durée de votre événement. Chacune de nos formules inclut les fonctionnalités de base pour une expérience optimale.";

export const services = [
    {
        title: "Stands personnalisables",
        description: "Offrez à vos exposants une expérience unique grâce à nos stands virtuels personnalisables. Les entreprises peuvent afficher leur carte d'identité, présenter leurs produits et personnaliser leur stand à leur image."
    },
    {
        title: "Salle de conférence",
        description: "Partagez des contenus en direct ou enregistrés avec vos participants dans notre salle de conférence virtuelle. Mettez également en valeur vos sponsors en affichant leur logo dans la salle à différents niveaux de visibilité."
    },
    {
        title: "Diverses statistiques",
        description: "Obtenez des statistiques détaillées sur vos stands d'exposition virtuels et maximisez l'engagement de vos participants. Suivez les données de participation, d'interaction et de conversion pour optimiser vos futurs événements virtuels."
    },
];

export const teams = [
    {
        nom: "Raja Rakotonirina",
        description: "Frontend Dev / 3D Conception",
        photo: raja
    },
    {
        nom: "Landry Manankoraisina",
        description: "FullStack Developer",
        photo: landry
    },
    {
        nom: "Arleme Johnson",
        description: "3D Conception / Backend Dev",
        photo: arleme
    },
    {
        nom: "Vololoniaina Damia",
        description: "Buisness Developer / PO",
        photo: damia
    },
    {
        nom: "Gaetan Jonathan",
        description: "Product Manager / SM",
        photo: gaetan
    }
];


/*
Jusqu'à X utilisateurs simultanés
Jusqu'à X exposants
Durée de l'événement : 1 journée
Accès à la plateforme 3D interactive
*/
export const cardPrincing = [
    {
        titre: "Essentielle",
        description: "La formule idéale pour les événements virtuels de petite envergure.",
        benefice: [
            "Base inclus",
            "🔝 100 utilisateurs",
            "🔝 20 exposants",
            "🔝 une journée",
            "⛑️ Email",
            ""
        ],
        price: "300 000 Ar",
    },
    {
        titre: "Standard",
        description: "La formule idéale pour les événements virtuels de moyenne envergure.",
        benefice: [
            "Base inclus",
            "🔝 500 utilisateurs",
            "🔝 60 exposants",
            "🔝 3 jours",
            "⛑️ Chat - telephone",
            "Quiz"
        ],
        price: "500 000 Ar",
    },
    {
        titre: "Premium",
        description: "La formule idéale pour les événements virtuels de grande envergure.",
        benefice: [
            "Base inclus",
            "🔝 2000 utilisateurs",
            "🔝 200 exposants",
            "🔝 7 jours",
            "⛑️ Intervention",
            "Sondages et quiz",
        ],
        price: "2 000 000 Ar",
    }
];


