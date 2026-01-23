// Import module banners
import module1Banner from '@/assets/modules/module1-banner.jpg';
import module2Banner from '@/assets/modules/module2-banner.jpg';
import module3Banner from '@/assets/modules/module3-banner.jpg';
import module4Banner from '@/assets/modules/module4-banner.jpg';
import module5Banner from '@/assets/modules/module5-banner.jpg';
import module6Banner from '@/assets/modules/module6-banner.jpg';
import module7Banner from '@/assets/modules/module7-banner.jpg';
import module8Banner from '@/assets/modules/module8-banner.png';
import module9Banner from '@/assets/modules/module9-banner.png';
import module10Banner from '@/assets/modules/module10-banner.png';

// Import figures
import numerisationProcess from '@/assets/figures/numerisation-process.png';
import digitalisationProcess from '@/assets/figures/digitalisation-process.png';
import digitalTransformationPyramid from '@/assets/figures/digital-transformation-pyramid.png';
import thirteenDrivers from '@/assets/figures/13-drivers.jpg';
import top10Failure from '@/assets/figures/top10-failure.png';
import sixPillars from '@/assets/figures/six-pillars.png';
import governanceStructure from '@/assets/figures/governance-structure.png';
import governanceSI from '@/assets/figures/governance-si.jpg';
import cdtoRoles from '@/assets/figures/cdto-roles.jpg';
import cdtoMissions from '@/assets/figures/cdto-missions.jpg';
import diagnosticMaturity from '@/assets/figures/diagnostic-maturity.png';
import painPoints from '@/assets/figures/pain-points.png';
import strategyDigital from '@/assets/figures/strategy-digital.png';
import strategicAxes from '@/assets/figures/strategic-axes.png';
import roadmapSteps from '@/assets/figures/roadmap-steps.png';
import prioritizationMatrix from '@/assets/figures/prioritization-matrix.png';
import urbanisationPerspectives from '@/assets/figures/urbanisation-perspectives.png';
import togafCycle from '@/assets/figures/togaf-cycle.jpg';
import architectureLayers from '@/assets/figures/architecture-layers.png';
import dataIntegration from '@/assets/figures/data-integration.png';
import infrastructureDiagram from '@/assets/figures/infrastructure-diagram.png';
import sdsiSchema from '@/assets/figures/sdsi-schema.png';

// Import additional figures
import digitalisationBenefits from '@/assets/figures/digitalisation-benefits.png';
import transformationLevels from '@/assets/figures/transformation-levels.png';
import pillarsDetails from '@/assets/figures/pillars-details.png';
import top10Roles from '@/assets/figures/top10-roles.png';
import gartnerLeadership from '@/assets/figures/gartner-leadership.png';
import diagnosticIllustration from '@/assets/figures/diagnostic-illustration.jpg';
import diagnosticComparison from '@/assets/figures/diagnostic-comparison.png';
import painPointsTypes from '@/assets/figures/pain-points-types.png';
import diagnosticLivrables from '@/assets/figures/diagnostic-livrables.png';
import strategyQuestions from '@/assets/figures/strategy-questions.png';
import visionStrategy from '@/assets/figures/vision-strategy.jpg';
import axesIcons from '@/assets/figures/axes-icons.png';
import prioritizationIcon from '@/assets/figures/prioritization-icon.png';
import urbanisationPrinciples from '@/assets/figures/urbanisation-principles.png';
import togafAdm from '@/assets/figures/togaf-adm.png';
import businessLayer from '@/assets/figures/business-layer.jpg';
import functionalLayer from '@/assets/figures/functional-layer.jpg';
import functionalDiagram from '@/assets/figures/functional-diagram.png';
import applicationLayer from '@/assets/figures/application-layer.jpg';
import asIsToBeSchema from '@/assets/figures/as-is-to-be.jpg';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
}

export interface Module {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  keyMessage: string;
  bannerImage: string;
  sections: Section[];
  quiz: QuizQuestion[];
}

export interface Section {
  id: string;
  title: string;
  content: string[];
  keyPoints?: string[];
  figures?: { src: string; caption: string }[];
  tables?: { headers: string[]; rows: string[][] }[];
}

export const moduleBanners: Record<number, string> = {
  1: module1Banner,
  2: module2Banner,
  3: module3Banner,
  4: module4Banner,
  5: module5Banner,
  6: module6Banner,
  7: module7Banner,
  8: module8Banner,
  9: module9Banner,
  10: module10Banner,
};

export const courseModules: Module[] = [
  {
    id: 1,
    title: "Fondamentaux de la Transformation Digitale",
    shortTitle: "Fondamentaux",
    description: "Comprendre les concepts clés de la transformation digitale, la différence entre numérisation, digitalisation et transformation.",
    keyMessage: "La transformation digitale est avant tout une transformation stratégique, organisationnelle et humaine. La technologie n'est qu'un levier.",
    bannerImage: module1Banner,
    sections: [
      {
        id: "1-1",
        title: "Numérisation : conversion au format numérique",
        content: [
          "La numérisation consiste à convertir un support physique ou analogique en format numérique, sans modifier le processus sous-jacent.",
          "Exemples concrets : scan de dossiers papier, archivage électronique, numérisation de formulaires administratifs.",
          "La numérisation améliore l'accessibilité et le stockage sécurisé, mais n'impacte pas l'organisation ni la performance globale.",
          "Les étapes typiques : préparation des sites, ramassage des documents, numérisation proprement dite, indexation.",
          "Le processus inclut : ingestion des documents numérisés, dépôt info-numérique, reconnaissance optique de caractères (ROC), paramétrage des accès, recherche robuste, intégration avec les bases de données existantes."
        ],
        keyPoints: ["Stockage sécurisé", "Documents numériques", "Archivage électronique", "ROC (Reconnaissance Optique)"],
        figures: [
          { src: numerisationProcess, caption: "Figure 1.1 - Processus de numérisation et stockage sécurisé" }
        ]
      },
      {
        id: "1-2",
        title: "Digitalisation des processus métier",
        content: [
          "La digitalisation correspond à l'automatisation d'un processus existant à l'aide d'outils numériques.",
          "Exemples : formulaire en ligne remplaçant le papier, workflow automatisé, application métier simple.",
          "La digitalisation optimise l'existant, mais reproduit souvent les mêmes lenteurs et dysfonctionnements si les processus ne sont pas repensés.",
          "Étapes clés : identification des processus à digitaliser, modélisation AS-IS (processus existants), définition des processus cibles TO-BE, choix des outils numériques (ERP, workflow, RPA), déploiement et automatisation, formation des utilisateurs.",
          "Avantages de la digitalisation : réduction des coûts de main-d'œuvre, réduction des erreurs humaines, facilité de mise à l'échelle, meilleure intégration des données, temps libéré pour d'autres efforts, amélioration de la productivité."
        ],
        keyPoints: ["Identification des processus", "Modélisation AS-IS / TO-BE", "Déploiement et automatisation", "Formation utilisateurs"],
        figures: [
          { src: digitalisationProcess, caption: "Figure 1.2 - Workflow de digitalisation des processus métier" },
          { src: digitalisationBenefits, caption: "Figure 1.2b - Avantages de la digitalisation : réduction des coûts, erreurs et temps" }
        ]
      },
      {
        id: "1-3",
        title: "La Transformation Digitale : changement profond",
        content: [
          "La transformation digitale est une démarche globale et stratégique visant à repenser entièrement : les processus, l'organisation, la gouvernance, la relation usager/client, la création de valeur.",
          "C'est une série de changements profonds, durables et transverses qui permettent de nouveaux modèles éducatifs et opérationnels.",
          "Elle transforme les opérations d'une institution, les directions stratégiques et la proposition de valeur en s'appuyant sur le numérique.",
          "Les 5 niveaux de la transformation : 1) Digitize information, 2) Organize, 3) Automate processes, 4) Streamline processes, 5) Digital transformation complète.",
          "La transformation digitale va bien au-delà de la simple digitalisation : elle implique un changement culturel profond."
        ],
        keyPoints: ["Vision stratégique", "Changements profonds", "Création de valeur", "Nouveaux modèles"],
        figures: [
          { src: digitalTransformationPyramid, caption: "Figure 1.3 - Pyramide de la transformation digitale : de la numérisation à la transformation" },
          { src: transformationLevels, caption: "Figure 1.3b - Les 5 niveaux de transformation : Digitize, Organize, Automate, Streamline, Transform" }
        ]
      },
      {
        id: "1-4",
        title: "Pourquoi la transformation est incontournable",
        content: [
          "Les organisations sont confrontées à des défis majeurs nécessitant une adaptation digitale urgente.",
          "Le numérique devient un levier stratégique, à condition d'être : aligné sur les objectifs métiers, porté par la direction, gouverné efficacement.",
          "Les 13 facteurs clés de la transformation digitale (13 Key Drivers) :",
          "1. Digital Adoption - 2. Decision-making amélioré - 3. Technology comme levier - 4. New business models - 5. Workforce skills - 6. Increased agility - 7. Optimizing digital workflows - 8. Less spending - 9. Regulatory compliance and risk management - 10. Streamlining infrastructure upgrades - 11. Corporate sustainability and responsibility - 12. Platforms for collaboration - 13. Compétitivité accrue.",
          "Ces facteurs montrent que la transformation n'est pas un choix mais une nécessité pour la survie et la croissance des organisations."
        ],
        keyPoints: ["Adoption digitale", "Agilité accrue", "Nouveaux modèles d'affaires", "13 Key Drivers"],
        figures: [
          { src: thirteenDrivers, caption: "Figure 1.4 - Les 13 facteurs clés de la transformation digitale" }
        ]
      },
      {
        id: "1-5",
        title: "Pourquoi les projets digitaux échouent",
        content: [
          "Les causes d'échec les plus fréquentes sont :",
          "• Absence de vision claire et partagée par tous les acteurs",
          "• Confusion entre projet IT simple et transformation digitale globale",
          "• Gouvernance inexistante ou inefficace",
          "• Résistance au changement ignorée ou sous-estimée",
          "• Cybersécurité intégrée trop tardivement",
          "TOP 10 des raisons d'échec : 1) Misalignment in Scope, 2) Unrealistic Expectations, 3) No Processes, 4) Over-engineering, 5) Poorly Written requirements, 6) Poor Management, 7) No Enterprise Architecture, 8) No Master Data Governance, 9) Poor System Selection, 10) Uncontrollable issues.",
          "En Afrique, ces échecs sont amplifiés par la dépendance aux bailleurs de fonds et la faiblesse des capacités internes."
        ],
        keyPoints: ["Vision claire", "Gouvernance", "Gestion du changement", "Cybersécurité"],
        figures: [
          { src: top10Failure, caption: "Figure 1.5 - TOP 10 des raisons d'échec de la transformation digitale" }
        ]
      },
      {
        id: "1-6",
        title: "Les six piliers fondamentaux",
        content: [
          "Une transformation digitale réussie repose sur l'alignement de six piliers indissociables :",
          "1. Vision et stratégie : définir clairement où l'on veut aller et comment y parvenir",
          "2. Gouvernance et leadership : assurer une direction forte et des mécanismes de décision clairs",
          "3. Processus métiers : repenser et optimiser les façons de travailler",
          "4. Technologies : choisir et déployer les bons outils techniques",
          "5. Données : gérer l'information comme un actif stratégique",
          "6. Culture et compétences : développer les talents et faire évoluer les mentalités",
          "Ces piliers s'articulent autour de : Digital Strategy, Digital Skills, Digital Leadership, Disruptive Innovation, Digital Focus, Investment, Culture, Change Management, Platform Governance, Architectures & Business Models.",
          "Négliger un seul pilier compromet l'ensemble de la démarche de transformation."
        ],
        keyPoints: ["Vision et stratégie", "Gouvernance", "Données", "Culture et compétences"],
        figures: [
          { src: sixPillars, caption: "Figure 1.6 - Les six piliers de la transformation digitale" },
          { src: pillarsDetails, caption: "Figure 1.6b - Digital Transformation Pillars : Strategy, People, Process, Technology" }
        ]
      }
    ],
    quiz: [
      {
        id: "q1-1",
        question: "Quelle est la différence principale entre numérisation et digitalisation ?",
        options: [
          "La numérisation modifie les processus, pas la digitalisation",
          "La numérisation convertit en numérique sans changer les processus, la digitalisation automatise les processus",
          "Ce sont deux termes synonymes",
          "La digitalisation est plus ancienne que la numérisation"
        ],
        correctAnswers: [1],
        explanation: "La numérisation consiste à convertir un support physique en format numérique sans modifier le processus sous-jacent, tandis que la digitalisation automatise les processus existants à l'aide d'outils numériques."
      },
      {
        id: "q1-2",
        question: "Combien de piliers fondamentaux compte la transformation digitale selon le cours ?",
        options: ["4 piliers", "5 piliers", "6 piliers", "8 piliers"],
        correctAnswers: [2],
        explanation: "Les six piliers sont : Vision et stratégie, Gouvernance et leadership, Processus métiers, Technologies, Données, Culture et compétences."
      },
      {
        id: "q1-3",
        question: "Parmi les causes d'échec des projets digitaux, lesquelles sont mentionnées ? (plusieurs réponses possibles)",
        options: [
          "Absence de vision claire",
          "Budget trop important",
          "Gouvernance inefficace",
          "Résistance au changement ignorée"
        ],
        correctAnswers: [0, 2, 3],
        explanation: "Les principales causes d'échec incluent l'absence de vision claire, la gouvernance inefficace et la résistance au changement ignorée. Un budget important n'est pas une cause d'échec."
      },
      {
        id: "q1-4",
        question: "Quel est le message clé du module 1 ?",
        options: [
          "La technologie est le facteur principal de succès",
          "La transformation digitale est avant tout stratégique, organisationnelle et humaine",
          "Les outils numériques garantissent la réussite",
          "La digitalisation suffit pour transformer une organisation"
        ],
        correctAnswers: [1],
        explanation: "Le message clé souligne que la transformation digitale est avant tout une transformation stratégique, organisationnelle et humaine. La technologie n'est qu'un levier."
      },
      {
        id: "q1-5",
        question: "Combien de facteurs clés (Key Drivers) de la transformation digitale sont identifiés ?",
        options: ["10 facteurs", "12 facteurs", "13 facteurs", "15 facteurs"],
        correctAnswers: [2],
        explanation: "Le cours identifie 13 Key Drivers de la transformation digitale, incluant l'adoption digitale, la prise de décision, l'agilité, les nouveaux modèles d'affaires, etc."
      }
    ]
  },
  {
    id: 2,
    title: "Gouvernance Digitale & Rôle du CDTO",
    shortTitle: "Gouvernance",
    description: "Découvrir le rôle central de la gouvernance dans la transformation et les responsabilités du Chief Digital Transformation Officer.",
    keyMessage: "Sans gouvernance claire et leadership fort, aucune transformation digitale ne peut réussir, quel que soit le niveau technologique.",
    bannerImage: module2Banner,
    sections: [
      {
        id: "2-1",
        title: "Pourquoi la gouvernance digitale est centrale (1/2)",
        content: [
          "La gouvernance digitale garantit : l'alignement stratégique, la cohérence des projets, la maîtrise des coûts et des risques, la création de valeur mesurable.",
          "Sans gouvernance, les initiatives digitales deviennent dispersées et inefficaces, menant à un gaspillage de ressources.",
          "La structure de gouvernance implique plusieurs niveaux : Board of Directors (Corporate Governance), Executive Board, Management Teams, Project Steering Groups.",
          "Au niveau IT : IT Governance, IT Steering Group, Service Portfolio, Project Portfolio Steering Groups, Service and Vendor Steering Groups, Change Advisory Board (CAB).",
          "Cette structure hiérarchique assure que les décisions sont prises au bon niveau et que les initiatives sont alignées sur la stratégie."
        ],
        keyPoints: ["Alignement stratégique", "Maîtrise des risques", "Valeur mesurable", "Structure hiérarchique"],
        figures: [
          { src: governanceStructure, caption: "Figure 2.1 - Structure de gouvernance IT et digitale" }
        ]
      },
      {
        id: "2-2",
        title: "Pourquoi la gouvernance digitale est centrale (2/2)",
        content: [
          "La gouvernance du SI vise à optimiser l'évolution des technologies de l'information en harmonie avec les objectifs et la stratégie globale de l'entreprise.",
          "Les dimensions clés de la gouvernance SI :",
          "• Alignement stratégique : analyse des besoins, plan directeur, mise en œuvre stratégique",
          "• Création de valeur : évaluation des performances, bilan, contrôle de gestion",
          "• Gestion des risques : sécurité, assurances, Plan de Continuité d'Activité (PCA), Plan de Reprise d'Activité (PRA)",
          "• Gestion des ressources : budgets/achats, gestion des compétences, gestion des contrats",
          "• Planification opérationnelle : conception, développement, production, support",
          "Cette approche holistique permet d'analyser les impacts métiers et d'assurer une gouvernance efficace."
        ],
        keyPoints: ["Création de valeur", "Gestion des risques", "PCA/PRA", "Planification opérationnelle"],
        figures: [
          { src: governanceSI, caption: "Figure 2.2 - Les dimensions de la gouvernance du SI" }
        ]
      },
      {
        id: "2-3",
        title: "Le rôle du CDTO (Chief Digital Transformation Officer)",
        content: [
          "Le CDTO est le chef d'orchestre de la transformation digitale. Il agit à l'interface entre : la direction générale, les métiers, la DSI, les partenaires externes.",
          "Ses responsabilités couvrent : la vision, la gouvernance, le pilotage et la création de valeur.",
          "Les 7 rôles clés du Chief Transformation Officer :",
          "1. Innovator : promouvoir l'innovation et les nouvelles idées",
          "2. Storyteller : communiquer la vision de façon inspirante",
          "3. Role Model : incarner le changement souhaité",
          "4. Corporate Architect : concevoir l'architecture de transformation",
          "5. Advocate : défendre les initiatives auprès de la direction",
          "6. Bookkeeper : assurer le suivi et la mesure des résultats",
          "7. Collaborator : fédérer les équipes et faciliter la coopération"
        ],
        keyPoints: ["Chef d'orchestre", "Interface multi-acteurs", "7 rôles clés", "Vision et pilotage"],
        figures: [
          { src: cdtoRoles, caption: "Figure 2.3 - Les 7 rôles du Chief Transformation Officer" }
        ]
      },
      {
        id: "2-4",
        title: "Différences entre CDTO, DSI, CTO et CDO",
        content: [
          "Il est important de distinguer les différents rôles liés au digital :",
          "• DSI / CIO (Chief Information Officer) : pilotage du système d'information, gestion des infrastructures IT",
          "• CTO (Chief Technology Officer) : choix technologiques, veille technologique, innovation technique",
          "• CDO (Chief Data Officer) : gouvernance des données, qualité et exploitation des données",
          "• CDTO (Chief Digital Transformation Officer) : transformation digitale globale et transverse",
          "Le CDTO coordonne, arbitre et pilote la transformation digitale dans son ensemble, en s'appuyant sur les autres rôles.",
          "TOP 10 Digital Transformation Roles : 1) Sponsor, 2) Project Manager, 3) Business Process Owners, 4) Subject Matter Experts, 5) Solution-agnostic Consultant, 6) Functional Consultants, 7) Technical Consultants, 8) Integration Consultants, 9) Best-of-breed App Experts, 10) Change Management Consultant."
        ],
        keyPoints: ["DSI = SI", "CTO = Technologie", "CDO = Données", "CDTO = Transformation globale"],
        figures: [
          { src: top10Roles, caption: "Figure 2.3b - TOP 10 Digital Transformation Roles" }
        ]
      },
      {
        id: "2-5",
        title: "Missions stratégiques du CDTO",
        content: [
          "Les missions clés du CDTO sont structurées en 6 étapes :",
          "1. Assessment of Transformation Opportunities & Define Roadmap : évaluer les opportunités et définir la feuille de route",
          "2. Alignment with Business Strategy & Goals : aligner sur la stratégie et les objectifs métiers",
          "3. Global Steering (Transformation architecture & Planning) : piloter l'architecture et la planification",
          "4. Governance : assurer la gouvernance de la transformation",
          "5. Optimization & Harness Digital Capabilities : optimiser et exploiter les capacités digitales",
          "6. Monitoring, Change management and Governance : surveiller, gérer le changement et gouverner",
          "Le CDTO doit définir et porter la vision digitale, aligner métiers, SI et stratégie, piloter la feuille de route, prioriser les initiatives et mesurer la valeur créée."
        ],
        keyPoints: ["Vision digitale", "Alignement", "Pilotage", "Mesure de valeur"],
        figures: [
          { src: cdtoMissions, caption: "Figure 2.4 - Les 6 missions stratégiques du CDTO" }
        ]
      },
      {
        id: "2-6",
        title: "Leadership et posture du CDTO",
        content: [
          "Le CDTO doit développer une posture de leader transformationnel :",
          "• Parler le langage du top management pour être crédible",
          "• Traduire le digital en valeur métier compréhensible par tous",
          "• Fédérer les équipes autour d'une vision commune",
          "• Gérer les résistances avec diplomatie et fermeté",
          "Recommandations clés (Source: Gartner) :",
          "• Geek Out on Technology : maîtriser les technologies sans se perdre dans les détails techniques",
          "• Never Consider Digital to Be the Outcome : le digital est un moyen, pas une fin en soi",
          "• Look Beyond Industry Boundaries : s'inspirer d'autres secteurs pour innover",
          "Le leadership est un facteur clé de succès de toute transformation digitale."
        ],
        keyPoints: ["Leadership transformationnel", "Communication", "Gestion des résistances", "Vision transverse"],
        figures: [
          { src: gartnerLeadership, caption: "Figure 2.5 - Recommandations Gartner pour le Digital Transformation Leader" }
        ]
      }
    ],
    quiz: [
      {
        id: "q2-1",
        question: "Que garantit la gouvernance digitale ?",
        options: [
          "Uniquement la réduction des coûts",
          "L'alignement stratégique, la cohérence des projets, la maîtrise des risques",
          "La mise en place de nouvelles technologies",
          "L'automatisation complète des processus"
        ],
        correctAnswers: [1],
        explanation: "La gouvernance digitale garantit l'alignement stratégique, la cohérence des projets, la maîtrise des coûts et des risques, et la création de valeur mesurable."
      },
      {
        id: "q2-2",
        question: "Combien de rôles clés du CDTO sont identifiés dans le cours ?",
        options: ["5 rôles", "6 rôles", "7 rôles", "8 rôles"],
        correctAnswers: [2],
        explanation: "Les 7 rôles sont : Innovator, Storyteller, Role Model, Corporate Architect, Advocate, Bookkeeper, Collaborator."
      },
      {
        id: "q2-3",
        question: "Quelle est la différence principale entre le CDO et le CDTO ?",
        options: [
          "Ils ont le même rôle",
          "Le CDO gère les données, le CDTO pilote la transformation globale",
          "Le CDTO gère les données",
          "Le CDO pilote la transformation"
        ],
        correctAnswers: [1],
        explanation: "Le CDO (Chief Data Officer) se concentre sur la gouvernance des données, tandis que le CDTO pilote la transformation digitale globale et transverse."
      },
      {
        id: "q2-4",
        question: "Quel est le message clé du module 2 ?",
        options: [
          "La technologie suffit pour réussir",
          "Sans gouvernance claire et leadership fort, aucune transformation ne peut réussir",
          "Le CDTO n'est pas indispensable",
          "La gouvernance est optionnelle"
        ],
        correctAnswers: [1],
        explanation: "Le message clé souligne que sans gouvernance claire et leadership fort, aucune transformation digitale ne peut réussir, quel que soit le niveau technologique."
      }
    ]
  },
  {
    id: 3,
    title: "Diagnostic de l'Existant & Maturité Digitale",
    shortTitle: "Diagnostic",
    description: "Apprendre à évaluer le niveau de maturité digitale d'une organisation et identifier les axes d'amélioration.",
    keyMessage: "Un diagnostic précis de l'existant est le fondement de toute stratégie de transformation réussie.",
    bannerImage: module3Banner,
    sections: [
      {
        id: "3-1",
        title: "Pourquoi réaliser un diagnostic avant toute transformation",
        content: [
          "Le diagnostic de l'existant permet de :",
          "• Comprendre la situation réelle de l'organisation",
          "• Identifier les forces, faiblesses et blocages",
          "• Éviter les décisions basées sur des perceptions ou des intuitions",
          "• Disposer d'une base factuelle pour définir la stratégie digitale",
          "Sans diagnostic préalable :",
          "• Les projets sont mal ciblés et ne répondent pas aux vrais besoins",
          "• Les priorités sont erronées",
          "• Les investissements sont peu rentables et gaspillés",
          "Le diagnostic est donc une étape fondamentale et non négociable."
        ],
        keyPoints: ["Situation réelle", "Base factuelle", "Éviter les erreurs", "Investissements ciblés"],
        figures: [
          { src: diagnosticIllustration, caption: "Figure 3.0 - Illustration du diagnostic de l'existant" }
        ]
      },
      {
        id: "3-2",
        title: "Diagnostic SI vs Diagnostic de Transformation Digitale",
        content: [
          "Il faut distinguer deux types de diagnostic :",
          "Diagnostic SI (Système d'Information) :",
          "• Focalisé sur les infrastructures, applications et outils techniques",
          "• Réalisé principalement par la DSI",
          "• Vise la performance technique du système",
          "Diagnostic de Transformation Digitale :",
          "• Couvre l'organisation, les métiers, la gouvernance ET la culture",
          "• Implique la direction générale et les métiers (pas seulement l'IT)",
          "• Vise la création de valeur et l'impact stratégique global",
          "Le diagnostic de transformation englobe le diagnostic SI, mais va bien au-delà en intégrant toutes les dimensions de l'organisation."
        ],
        keyPoints: ["Diagnostic SI = technique", "Diagnostic TD = stratégique", "Vision globale", "Création de valeur"],
        figures: [
          { src: diagnosticComparison, caption: "Figure 3.1 - Comparaison Diagnostic SI vs Diagnostic de Transformation" }
        ]
      },
      {
        id: "3-3",
        title: "Les dimensions analysées dans un diagnostic digital",
        content: [
          "Un diagnostic de transformation digitale couvre généralement cinq dimensions essentielles :",
          "1. Organisation et gouvernance : rôles et responsabilités, instances de décision, niveau de coordination",
          "2. Processus métiers : formalisation des processus, redondances, lenteurs et blocages identifiés",
          "3. Système d'information : cohérence applicative, interopérabilité, dettes techniques accumulées",
          "4. Données : qualité des données, disponibilité, gouvernance des données en place",
          "5. Cybersécurité : gestion des accès, protection des données, continuité d'activité",
          "Chaque dimension doit être évaluée avec rigueur pour obtenir une vision complète."
        ],
        keyPoints: ["5 dimensions", "Organisation", "Processus", "SI", "Données", "Cybersécurité"]
      },
      {
        id: "3-4",
        title: "Évaluation de la maturité digitale",
        content: [
          "La maturité digitale mesure la capacité d'une organisation à utiliser efficacement le numérique.",
          "Un modèle classique comporte 5 niveaux de maturité :",
          "1. Initial : pratiques informelles, outils dispersés, pas de coordination",
          "2. Réactif : initiatives ponctuelles non coordonnées, réponse aux problèmes",
          "3. Structuré : gouvernance et processus définis, début d'organisation",
          "4. Piloté : indicateurs et pilotage de la performance, mesure des résultats",
          "5. Optimisé : amélioration continue et innovation, excellence opérationnelle",
          "En Afrique, beaucoup d'organisations se situent entre les niveaux 1 et 3, ce qui représente une opportunité de progression importante."
        ],
        keyPoints: ["5 niveaux de maturité", "Initial à Optimisé", "Amélioration continue", "Contexte africain"],
        figures: [
          { src: diagnosticMaturity, caption: "Figure 3.1 - Les 5 niveaux de maturité digitale" }
        ]
      },
      {
        id: "3-5",
        title: "Identification des irritants métiers",
        content: [
          "Les irritants métiers sont les problèmes concrets vécus par les utilisateurs au quotidien.",
          "Les 4 types de points de douleur (Pain Points) :",
          "1. Financial Pain Point : quand les clients dépensent des ressources et finissent en difficulté financière",
          "2. Productivity Pain Point : quand les clients veulent être plus efficaces mais n'y parviennent pas",
          "3. Process Pain Point : quand les marques interagissent avec les clients via des processus incohérents",
          "4. Support Pain Point : quand les clients ne reçoivent pas le bon support pendant leur parcours",
          "Ces irritants constituent des opportunités rapides de transformation (quick wins) et des leviers d'adhésion des utilisateurs.",
          "Un bon diagnostic donne toujours la parole aux métiers pour identifier ces points de friction."
        ],
        keyPoints: ["4 types de pain points", "Quick wins", "Adhésion utilisateurs", "Écoute des métiers"],
        figures: [
          { src: painPoints, caption: "Figure 3.3 - Les 4 types de points de douleur client" },
          { src: painPointsTypes, caption: "Figure 3.3b - Détail des Pain Points : Financial, Productivity, Process, Support" }
        ]
      },
      {
        id: "3-6",
        title: "Livrables du diagnostic digital",
        content: [
          "Le diagnostic se matérialise par plusieurs livrables clés :",
          "1. Un rapport structuré : document détaillé présentant l'analyse complète de chaque dimension",
          "2. Une matrice de maturité digitale : positionnement de l'organisation sur les 5 niveaux pour chaque axe",
          "3. Une synthèse exécutive pour la direction : résumé des points clés et recommandations prioritaires",
          "Ces livrables servent de base à la définition de la stratégie digitale.",
          "Ils doivent être clairs, actionnables et compréhensibles par tous les niveaux de l'organisation."
        ],
        keyPoints: ["Rapport structuré", "Matrice de maturité", "Synthèse exécutive", "Base pour la stratégie"],
        figures: [
          { src: diagnosticLivrables, caption: "Figure 3.4 - Livrables du diagnostic digital" }
        ]
      }
    ],
    quiz: [
      {
        id: "q3-1",
        question: "Combien de dimensions sont analysées dans un diagnostic digital complet ?",
        options: ["3 dimensions", "4 dimensions", "5 dimensions", "6 dimensions"],
        correctAnswers: [2],
        explanation: "Les 5 dimensions sont : Organisation et gouvernance, Processus métiers, Système d'information, Données, Cybersécurité."
      },
      {
        id: "q3-2",
        question: "Combien de niveaux compte le modèle de maturité digitale ?",
        options: ["3 niveaux", "4 niveaux", "5 niveaux", "6 niveaux"],
        correctAnswers: [2],
        explanation: "Les 5 niveaux sont : Initial, Réactif, Structuré, Piloté, Optimisé."
      },
      {
        id: "q3-3",
        question: "Quels sont les types de pain points mentionnés ? (plusieurs réponses)",
        options: [
          "Financial Pain Point",
          "Technical Pain Point",
          "Productivity Pain Point",
          "Support Pain Point"
        ],
        correctAnswers: [0, 2, 3],
        explanation: "Les 4 types sont : Financial, Productivity, Process et Support Pain Points. Technical n'en fait pas partie."
      },
      {
        id: "q3-4",
        question: "Quelle est la différence entre diagnostic SI et diagnostic de transformation digitale ?",
        options: [
          "Ils sont identiques",
          "Le diagnostic SI est plus large",
          "Le diagnostic de transformation est plus global et inclut le diagnostic SI",
          "Le diagnostic SI inclut la transformation"
        ],
        correctAnswers: [2],
        explanation: "Le diagnostic de transformation digitale englobe le diagnostic SI mais va au-delà en incluant l'organisation, les métiers, la gouvernance et la culture."
      }
    ]
  },
  {
    id: 4,
    title: "Stratégie Digitale & Feuille de Route",
    shortTitle: "Stratégie",
    description: "Élaborer une vision digitale et construire une feuille de route actionnable pour la transformation.",
    keyMessage: "Une stratégie digitale claire traduit la vision en actions concrètes et mesurables.",
    bannerImage: module4Banner,
    sections: [
      {
        id: "4-1",
        title: "Pourquoi une stratégie digitale est indispensable",
        content: [
          "La stratégie digitale permet de :",
          "• Donner une direction claire à la transformation",
          "• Aligner les initiatives digitales sur les objectifs métiers",
          "• Éviter la dispersion des projets et des ressources",
          "• Sécuriser les investissements numériques",
          "Elle répond aux questions fondamentales : Qui sont vos visiteurs/clients ? Quelles sont leurs attentes, freins, désirs, besoins ? Qui sont vos concurrents ? Quels sites et réseaux sociaux cibler ? Que pouvez-vous leur proposer ? Quels contenus, services, outils, fonctionnalités ? Quels parcours et technologies utiliser ?",
          "Sans stratégie digitale, la transformation devient une succession de projets isolés sans cohérence."
        ],
        keyPoints: ["Direction claire", "Alignement", "Éviter la dispersion", "Sécuriser les investissements"],
        figures: [
          { src: strategyDigital, caption: "Figure 4.1 - Les questions clés de la stratégie digitale" },
          { src: strategyQuestions, caption: "Figure 4.1b - Qui, Où, Quoi, Comment, Combien ?" }
        ]
      },
      {
        id: "4-2",
        title: "Définir la vision digitale",
        content: [
          "La vision digitale répond à quatre questions clés :",
          "1. Où voulons-nous aller ? (destination)",
          "2. Quelle valeur voulons-nous créer ? (proposition de valeur)",
          "3. Pour quels usagers ou clients ? (cible)",
          "4. À quel horizon temporel ? (échéance)",
          "La vision doit être :",
          "• Simple et mémorisable",
          "• Compréhensible par tous les niveaux de l'organisation",
          "• Portée et défendue par la direction générale",
          "• Inspirante et mobilisatrice",
          "Une bonne vision guide toutes les décisions et inspire les équipes."
        ],
        keyPoints: ["4 questions clés", "Simple", "Portée par la DG", "Inspirante"],
        figures: [
          { src: visionStrategy, caption: "Figure 4.2 - Vision & Strategy : le point de départ" }
        ]
      },
      {
        id: "4-3",
        title: "Définition des axes stratégiques digitaux",
        content: [
          "Les axes stratégiques traduisent la vision en grandes orientations concrètes :",
          "Exemple d'axes stratégiques pour une collectivité :",
          "• Axe A : Construire un SI optimisé et efficient",
          "• Axe B : E-administration - Disposer d'équipements sécurisés et performants",
          "• Axe C : Dynamiser et faciliter l'usage du numérique",
          "• Axe D : Consolider le pilotage et l'organisation du numérique",
          "• Axe E : Formation - Contribuer au numérique du territoire (régional, national)",
          "Ces axes intègrent également la responsabilité sociétale et le développement durable.",
          "Chaque axe doit être décliné en objectifs mesurables et en initiatives concrètes."
        ],
        keyPoints: ["Axes stratégiques", "Objectifs mesurables", "Responsabilité sociétale", "Initiatives concrètes"],
        figures: [
          { src: strategicAxes, caption: "Figure 4.3 - Exemple d'axes stratégiques digitaux" },
          { src: axesIcons, caption: "Figure 4.3b - Icônes des axes A, B, C, D, E" }
        ]
      },
      {
        id: "4-4",
        title: "Construction de la feuille de route digitale",
        content: [
          "La feuille de route organise les initiatives dans le temps selon 3 horizons :",
          "• Court terme (quick wins) : résultats rapides pour crédibiliser la démarche",
          "• Moyen terme (structuration) : mise en place des fondations",
          "• Long terme (transformation profonde) : changements majeurs",
          "Elle tient compte de : l'appui du sponsor (support de la direction), les dépendances entre projets, les ressources disponibles (humaines, techniques, financières), les contraintes budgétaires.",
          "Étapes clés de construction : Secure full support from Senior management, Set ambitious goals, Allocate funding, Grow your culture, Introduce new workflows, Appoint a launch team, Start with lighthouse projects, Put an expert in place, Build your capabilities, Adopt agile methodology."
        ],
        keyPoints: ["3 horizons", "Quick wins", "Dépendances", "Ressources"],
        figures: [
          { src: roadmapSteps, caption: "Figure 4.3 - Les étapes de construction de la feuille de route" }
        ]
      },
      {
        id: "4-5",
        title: "Priorisation des initiatives digitales",
        content: [
          "La priorisation repose généralement sur 4 critères :",
          "1. La valeur métier attendue : quel impact sur les objectifs ?",
          "2. Le coût : quel investissement nécessaire ?",
          "3. Le niveau de risque : quels dangers potentiels ?",
          "4. La complexité : quelle difficulté de mise en œuvre ?",
          "La matrice de priorisation Impact/Effort permet de catégoriser les initiatives :",
          "• Fort impact / Faible effort = EXCELLENT (à faire en premier)",
          "• Fort impact / Effort élevé = BON (planifier)",
          "• Faible impact / Faible effort = MOYEN (à considérer)",
          "• Faible impact / Effort élevé = MAUVAIS (à éviter)",
          "En contexte africain, les quick wins visibles sont essentiels pour crédibiliser la démarche."
        ],
        keyPoints: ["4 critères", "Matrice Impact/Effort", "Quick wins", "Crédibiliser la démarche"],
        figures: [
          { src: prioritizationMatrix, caption: "Figure 4.5 - Matrice de priorisation Impact / Effort" },
          { src: prioritizationIcon, caption: "Figure 4.5b - Schéma de priorisation" }
        ]
      },
      {
        id: "4-6",
        title: "Indicateurs de performance (KPI) de la transformation",
        content: [
          "Les KPI (Key Performance Indicators) permettent de :",
          "• Mesurer l'avancement de la transformation",
          "• Évaluer la valeur créée",
          "• Ajuster la trajectoire si nécessaire",
          "Exemples de KPI de transformation digitale :",
          "• Taux d'adoption des solutions déployées",
          "• Réduction des délais de traitement",
          "• Satisfaction des usagers (NPS, enquêtes)",
          "• Amélioration de la qualité des données",
          "Le dashboard de suivi permet de tracker les initiatives à travers les stages : Awareness, Consideration, Purchase, Retention.",
          "Un tableau de bord bien conçu permet un pilotage efficace de la transformation."
        ],
        keyPoints: ["Mesurer l'avancement", "Évaluer la valeur", "Ajuster la trajectoire", "Dashboard de suivi"]
      }
    ],
    quiz: [
      {
        id: "q4-1",
        question: "Combien de questions clés définissent la vision digitale ?",
        options: ["2 questions", "3 questions", "4 questions", "5 questions"],
        correctAnswers: [2],
        explanation: "Les 4 questions sont : Où voulons-nous aller ? Quelle valeur créer ? Pour quels usagers ? À quel horizon ?"
      },
      {
        id: "q4-2",
        question: "Quels sont les 3 horizons de la feuille de route ?",
        options: [
          "Passé, Présent, Futur",
          "Court terme, Moyen terme, Long terme",
          "Stratégique, Tactique, Opérationnel",
          "Local, National, International"
        ],
        correctAnswers: [1],
        explanation: "Les 3 horizons sont : Court terme (quick wins), Moyen terme (structuration), Long terme (transformation profonde)."
      },
      {
        id: "q4-3",
        question: "Quels critères sont utilisés pour la priorisation des initiatives ?",
        options: [
          "Valeur métier, Coût, Risque, Complexité",
          "Budget, Délai, Qualité",
          "Technique, Fonctionnel, Organisationnel",
          "Interne, Externe, Mixte"
        ],
        correctAnswers: [0],
        explanation: "Les 4 critères sont : Valeur métier attendue, Coût, Niveau de risque, Complexité."
      }
    ]
  },
  {
    id: 5,
    title: "Urbanisation du SI & Schéma Directeur",
    shortTitle: "Urbanisation SI",
    description: "Comprendre les principes d'urbanisation du système d'information et élaborer un Schéma Directeur des SI.",
    keyMessage: "L'urbanisation du SI assure la cohérence, la flexibilité et l'évolutivité de l'écosystème technologique.",
    bannerImage: module5Banner,
    sections: [
      {
        id: "5-1",
        title: "Pourquoi l'urbanisation du SI est un levier clé",
        content: [
          "L'urbanisation du système d'information vise à organiser, structurer et rationaliser l'ensemble des composants du SI afin de :",
          "• Réduire la complexité technique et fonctionnelle",
          "• Éviter la prolifération d'applications hétérogènes non intégrées",
          "• Améliorer l'agilité et l'évolutivité du système",
          "• Aligner durablement le SI sur les besoins métiers",
          "Sans urbanisation, la transformation digitale conduit souvent à un empilement de solutions difficile à maintenir et à faire évoluer.",
          "Les 4 perspectives de l'urbanisme SI : Objectifs Métier (Pourquoi?), Processus (Quoi?), Éléments Fonctionnels (Comment?), Éléments Applicatifs et Techniques (Avec quoi?)."
        ],
        keyPoints: ["Réduire la complexité", "Éviter l'hétérogénéité", "Agilité", "Alignement métier"],
        figures: [
          { src: urbanisationPerspectives, caption: "Figure 5.1 - Les 4 perspectives de l'urbanisme SI" }
        ]
      },
      {
        id: "5-2",
        title: "Principes fondamentaux de l'urbanisation",
        content: [
          "Les principes clés de l'urbanisation du SI sont :",
          "1. Alignement métier : le SI doit répondre aux besoins métiers réels et non l'inverse",
          "2. Modularité : les composants doivent être indépendants et réutilisables",
          "3. Interopérabilité : les applications doivent pouvoir échanger des données de façon fluide",
          "4. Évolutivité : le SI doit pouvoir s'adapter aux évolutions futures sans refonte complète",
          "Ces principes permettent d'éviter la dépendance à des solutions rigides et de garder le contrôle sur l'évolution du système.",
          "L'urbanisation favorise la rationalisation du patrimoine applicatif et la réduction de la dette technique."
        ],
        keyPoints: ["Alignement", "Modularité", "Interopérabilité", "Évolutivité"],
        figures: [
          { src: urbanisationPrinciples, caption: "Figure 5.1b - Principes fondamentaux de l'urbanisation" }
        ]
      },
      {
        id: "5-3",
        title: "Architecture d'entreprise : approche TOGAF",
        content: [
          "L'architecture d'entreprise fournit un cadre méthodologique pour structurer le SI de manière cohérente.",
          "TOGAF (The Open Group Architecture Framework) propose une approche en phases :",
          "• Preliminary : préparation et cadrage",
          "• A. Architecture Vision : définition de la vision",
          "• B. Business Architecture : architecture métier",
          "• C. Information Systems Architectures : architectures applicatives et données",
          "• D. Technology Architecture : architecture technique",
          "• E. Opportunities and Solutions : identification des solutions",
          "• F. Migration Planning : planification de la migration",
          "• G. Implementation Governance : gouvernance de l'implémentation",
          "• H. Architecture Change Management : gestion du changement",
          "Cette approche facilite le dialogue entre métiers et informaticiens."
        ],
        keyPoints: ["TOGAF", "Phases structurées", "Dialogue métiers/IT", "Cadre méthodologique"],
        figures: [
          { src: togafCycle, caption: "Figure 5.2 - Le cycle ADM de TOGAF" },
          { src: togafAdm, caption: "Figure 5.2b - Détail des phases ADM : A, B, C, D, E, F, G, H" }
        ]
      },
      {
        id: "5-4",
        title: "Les couches de l'architecture d'entreprise",
        content: [
          "L'architecture d'entreprise repose sur plusieurs couches complémentaires :",
          "La couche métier : décrit les missions de l'organisation, les processus métiers, les acteurs impliqués. Elle permet de comprendre ce que fait l'organisation.",
          "La couche fonctionnelle : traduit les processus métiers en fonctions (gestion des dossiers, suivi des activités, reporting, contrôle). Elle sert de passerelle entre le métier et les applications.",
          "La couche applicative : recense les logiciels existants, leurs rôles respectifs, leurs interactions. Elle permet d'identifier les redondances, les applications obsolètes, les manques fonctionnels.",
          "La couche données : décrit les données clés de l'organisation, leurs relations, leurs règles de gestion. Elle est essentielle pour garantir la cohérence et la qualité de l'information.",
          "La couche technique/infrastructure : concerne les infrastructures (serveurs, réseaux), les environnements (on-premise, cloud), les outils de sécurité. Elle doit supporter les autres couches de manière fiable et sécurisée."
        ],
        keyPoints: ["Couche métier", "Couche fonctionnelle", "Couche applicative", "Couche données", "Couche technique"],
        figures: [
          { src: architectureLayers, caption: "Figure 5.3 - Les couches de l'architecture technique" },
          { src: businessLayer, caption: "Figure 5.3b - La couche métier et fonctionnelle" },
          { src: functionalDiagram, caption: "Figure 5.3c - Diagramme fonctionnel Input/Process/Output" },
          { src: applicationLayer, caption: "Figure 5.3d - La couche applicative" }
        ]
      },
      {
        id: "5-5",
        title: "Cartographies AS-IS et TO-BE",
        content: [
          "L'urbanisation s'appuie sur deux cartographies essentielles :",
          "AS-IS (État actuel) : photographie du SI existant tel qu'il fonctionne aujourd'hui, avec ses forces et ses faiblesses.",
          "TO-BE (État cible) : vision cible du SI après transformation, représentant l'objectif à atteindre.",
          "Ces cartographies permettent de :",
          "• Visualiser l'écart entre l'existant et la cible",
          "• Identifier les chantiers de transformation nécessaires",
          "• Planifier la migration de façon structurée",
          "• Communiquer clairement sur la trajectoire d'évolution",
          "Le passage de AS-IS à TO-BE constitue le cœur du plan de transformation du SI."
        ],
        keyPoints: ["AS-IS = existant", "TO-BE = cible", "Écart à combler", "Plan de migration"],
        figures: [
          { src: asIsToBeSchema, caption: "Figure 5.4 - Cartographies AS-IS et TO-BE" }
        ]
      },
      {
        id: "5-6",
        title: "Le Schéma Directeur des SI (SDSI)",
        content: [
          "Le SDSI est un document stratégique qui :",
          "• Formalise la trajectoire d'évolution du SI sur 3 à 5 ans",
          "• Aligne le SI sur la stratégie digitale de l'organisation",
          "• Planifie les projets et investissements nécessaires",
          "Le SDSI s'articule autour de plusieurs éléments :",
          "• Raison d'être et valeurs de l'organisation",
          "• Vision de la Direction Générale",
          "• Objectifs et stratégies métiers",
          "• Portefeuille projets (programmes et projets)",
          "• Modèle opérationnel (capacité de décision, engagement des directions métiers, pilotage par la valeur)",
          "• Outils de gestion (PPM, RACI, matrices de risques, templates)",
          "La Data est considérée comme le carburant de la transformation."
        ],
        keyPoints: ["Document stratégique", "Horizon 3-5 ans", "Portefeuille projets", "Data comme carburant"],
        figures: [
          { src: sdsiSchema, caption: "Figure 5.4 - Structure du Schéma Directeur des SI" }
        ]
      }
    ],
    quiz: [
      {
        id: "q5-1",
        question: "Quels sont les 4 principes fondamentaux de l'urbanisation du SI ?",
        options: [
          "Coût, Délai, Qualité, Périmètre",
          "Alignement métier, Modularité, Interopérabilité, Évolutivité",
          "Planification, Organisation, Direction, Contrôle",
          "Analyse, Conception, Développement, Test"
        ],
        correctAnswers: [1],
        explanation: "Les 4 principes sont : Alignement métier, Modularité, Interopérabilité, Évolutivité."
      },
      {
        id: "q5-2",
        question: "Que signifie AS-IS et TO-BE dans l'urbanisation ?",
        options: [
          "Avant et Après le projet",
          "État actuel du SI et État cible après transformation",
          "Analyse et Synthèse",
          "Avantages et Inconvénients"
        ],
        correctAnswers: [1],
        explanation: "AS-IS représente l'état actuel du SI (photographie de l'existant) et TO-BE représente l'état cible après transformation."
      },
      {
        id: "q5-3",
        question: "Quel est l'horizon typique d'un Schéma Directeur des SI ?",
        options: ["1-2 ans", "3-5 ans", "5-10 ans", "10-15 ans"],
        correctAnswers: [1],
        explanation: "Le SDSI formalise typiquement la trajectoire d'évolution du SI sur un horizon de 3 à 5 ans."
      }
    ]
  },
  {
    id: 6,
    title: "Data, Cloud & Technologies Émergentes",
    shortTitle: "Data & Cloud",
    description: "Explorer les technologies clés de la transformation : data analytics, cloud computing, IA et autres innovations.",
    keyMessage: "Les données sont le nouveau pétrole et le cloud est l'infrastructure de l'agilité digitale.",
    bannerImage: module6Banner,
    sections: [
      {
        id: "6-1",
        title: "Stratégie Data et gouvernance des données",
        content: [
          "Les données sont au cœur de la transformation digitale. Une stratégie data efficace comprend :",
          "• Gouvernance des données : définir les rôles, responsabilités et règles de gestion",
          "• Qualité de la donnée : assurer l'exactitude, la complétude et la cohérence",
          "• Architecture data : choisir entre data lake, data warehouse, data mesh selon les besoins",
          "Le processus de gestion des données comprend :",
          "Data Extraction : collecte depuis FTP/HTTP/Web, CD, documents, portables, fichiers zippés, emails",
          "Data Integration : réplication et consolidation des sources dans une vue intégrée",
          "Data Discovery : recherche enterprise et modélisation dimensionnelle",
          "Data Quality & MDM : profilage, matching, cleansing, enrichissement",
          "Data Visualization : présentation des données de façon compréhensible"
        ],
        keyPoints: ["Gouvernance data", "Qualité", "Architecture", "MDM"],
        figures: [
          { src: dataIntegration, caption: "Figure 6.1 - Processus d'intégration et qualité des données" }
        ]
      },
      {
        id: "6-2",
        title: "Cloud Computing",
        content: [
          "Le cloud computing offre flexibilité et scalabilité pour supporter la transformation digitale.",
          "Modèles de déploiement :",
          "• Cloud public : infrastructure partagée, coûts variables, grande scalabilité",
          "• Cloud privé : infrastructure dédiée, contrôle total, sécurité renforcée",
          "• Cloud hybride : combinaison public/privé, équilibre flexibilité/contrôle",
          "• Multi-cloud : utilisation de plusieurs fournisseurs, évite le vendor lock-in",
          "Services cloud :",
          "• IaaS (Infrastructure as a Service) : serveurs, stockage, réseau",
          "• PaaS (Platform as a Service) : environnement de développement",
          "• SaaS (Software as a Service) : applications prêtes à l'emploi",
          "La stratégie de migration vers le cloud doit être planifiée avec soin."
        ],
        keyPoints: ["Public/Privé/Hybride", "IaaS/PaaS/SaaS", "Scalabilité", "Migration"],
        figures: [
          { src: infrastructureDiagram, caption: "Figure 6.2 - Diagramme d'infrastructure IT et Cloud" }
        ]
      },
      {
        id: "6-3",
        title: "Technologies émergentes",
        content: [
          "Plusieurs technologies émergentes transforment les organisations :",
          "Internet des objets (IoT) et Edge Computing :",
          "• Capteurs connectés pour collecter des données en temps réel",
          "• Traitement des données au plus près de la source (edge)",
          "• Applications : industrie 4.0, smart cities, santé connectée",
          "Blockchain et technologies distribuées :",
          "• Registre décentralisé et immuable",
          "• Traçabilité et transparence",
          "• Applications : supply chain, finance, identité digitale",
          "Automatisation (RPA) et Hyperautomation :",
          "• RPA (Robotic Process Automation) : automatisation des tâches répétitives",
          "• Hyperautomation : combinaison RPA + IA + ML pour automatisation intelligente",
          "• Applications : back-office, conformité, service client"
        ],
        keyPoints: ["IoT/Edge", "Blockchain", "RPA", "Hyperautomation"]
      },
      {
        id: "6-4",
        title: "Intelligence Artificielle et Analytics",
        content: [
          "L'IA et l'analytics sont des accélérateurs de la transformation :",
          "Analytics descriptif : que s'est-il passé ? (tableaux de bord, reporting)",
          "Analytics diagnostique : pourquoi cela s'est-il passé ? (analyse causale)",
          "Analytics prédictif : que va-t-il se passer ? (modèles statistiques, ML)",
          "Analytics prescriptif : que devons-nous faire ? (recommandations automatisées)",
          "Applications de l'IA en entreprise :",
          "• Chatbots et assistants virtuels pour le service client",
          "• Maintenance prédictive pour les équipements",
          "• Détection de fraude et anomalies",
          "• Personnalisation des offres et recommandations",
          "• Optimisation des processus métiers"
        ],
        keyPoints: ["Analytics 4 niveaux", "Machine Learning", "IA appliquée", "Automatisation"]
      }
    ],
    quiz: [
      {
        id: "q6-1",
        question: "Quels sont les 3 types de services cloud ?",
        options: [
          "Small, Medium, Large",
          "IaaS, PaaS, SaaS",
          "Public, Privé, Hybride",
          "Storage, Compute, Network"
        ],
        correctAnswers: [1],
        explanation: "Les 3 types de services cloud sont : IaaS (Infrastructure), PaaS (Platform), SaaS (Software) as a Service."
      },
      {
        id: "q6-2",
        question: "Que signifie RPA ?",
        options: [
          "Real Performance Analysis",
          "Robotic Process Automation",
          "Remote Platform Access",
          "Rapid Project Acceleration"
        ],
        correctAnswers: [1],
        explanation: "RPA signifie Robotic Process Automation - l'automatisation des tâches répétitives par des robots logiciels."
      },
      {
        id: "q6-3",
        question: "Quels sont les 4 niveaux d'analytics ?",
        options: [
          "Collecte, Stockage, Analyse, Visualisation",
          "Descriptif, Diagnostique, Prédictif, Prescriptif",
          "Données, Information, Connaissance, Sagesse",
          "Opérationnel, Tactique, Stratégique, Décisionnel"
        ],
        correctAnswers: [1],
        explanation: "Les 4 niveaux sont : Descriptif (que s'est-il passé), Diagnostique (pourquoi), Prédictif (que va-t-il se passer), Prescriptif (que faire)."
      }
    ]
  },
  {
    id: 7,
    title: "Pilotage des Programmes de Transformation",
    shortTitle: "Pilotage",
    description: "Maîtriser les méthodes et outils de pilotage des grands programmes de transformation digitale.",
    keyMessage: "Un pilotage rigoureux et agile est la clé du succès des programmes de transformation.",
    bannerImage: module7Banner,
    sections: [
      {
        id: "7-1",
        title: "Gouvernance de programme",
        content: [
          "La gouvernance de programme assure le pilotage efficace de la transformation :",
          "Structures de gouvernance :",
          "• Comité de pilotage stratégique : orientation et arbitrages majeurs",
          "• Comité de pilotage opérationnel : suivi de l'avancement",
          "• Équipe programme : coordination quotidienne",
          "Rôles et responsabilités clés :",
          "• Sponsor : porte la vision et débloque les obstacles",
          "• Directeur de programme : pilote l'ensemble des projets",
          "• Chefs de projet : gèrent les projets individuels",
          "• PMO : assure le reporting et les méthodes",
          "Méthodologies : Agile à l'échelle (SAFe, LeSS), approches hybrides combinant Agile et Waterfall."
        ],
        keyPoints: ["Comités", "Rôles clairs", "Agile à l'échelle", "PMO"]
      },
      {
        id: "7-2",
        title: "Gestion du portefeuille de projets",
        content: [
          "La gestion de portefeuille permet d'optimiser les investissements :",
          "• Sélection des projets alignés sur la stratégie",
          "• Priorisation selon la valeur et les ressources disponibles",
          "• Équilibrage du portefeuille (innovation vs maintenance)",
          "• Arbitrage en cas de conflits de ressources",
          "Outils de gestion de portefeuille (PPM - Project Portfolio Management) :",
          "• Vue consolidée de tous les projets",
          "• Suivi des budgets et des ressources",
          "• Analyse de la valeur créée",
          "• Identification des risques au niveau portefeuille"
        ],
        keyPoints: ["Sélection", "Priorisation", "Équilibrage", "PPM"]
      },
      {
        id: "7-3",
        title: "Indicateurs et tableaux de bord",
        content: [
          "Les KPIs de transformation permettent de mesurer le succès :",
          "KPIs de progression :",
          "• Avancement des projets (% réalisé)",
          "• Respect des jalons clés",
          "• Consommation budgétaire",
          "KPIs de valeur :",
          "• Taux d'adoption des solutions",
          "• Réduction des délais de traitement",
          "• Satisfaction utilisateurs (NPS)",
          "• ROI des initiatives",
          "Tableaux de bord et reporting exécutif :",
          "• Vue synthétique pour la direction",
          "• Drill-down pour les opérationnels",
          "• Alertes automatisées sur les déviations"
        ],
        keyPoints: ["KPIs progression", "KPIs valeur", "Dashboard", "Alertes"]
      },
      {
        id: "7-4",
        title: "Gestion des risques programme",
        content: [
          "La gestion des risques est critique pour la réussite :",
          "Types de risques dans les programmes de transformation :",
          "• Risques techniques : obsolescence, complexité, intégration",
          "• Risques organisationnels : résistance, compétences, gouvernance",
          "• Risques financiers : dépassement budget, ROI incertain",
          "• Risques externes : réglementation, marché, fournisseurs",
          "Processus de gestion des risques :",
          "• Identification : recenser tous les risques potentiels",
          "• Analyse : évaluer probabilité et impact",
          "• Planification : définir les actions de mitigation",
          "• Suivi : monitorer et ajuster en continu",
          "Outils : matrice des risques, registre des risques, plans de contingence."
        ],
        keyPoints: ["Types de risques", "Identification", "Mitigation", "Suivi continu"]
      }
    ],
    quiz: [
      {
        id: "q7-1",
        question: "Quel est le rôle du Sponsor dans un programme de transformation ?",
        options: [
          "Développer les applications",
          "Porter la vision et débloquer les obstacles",
          "Rédiger la documentation",
          "Former les utilisateurs"
        ],
        correctAnswers: [1],
        explanation: "Le Sponsor porte la vision de la transformation et dispose de l'autorité pour débloquer les obstacles rencontrés."
      },
      {
        id: "q7-2",
        question: "Que signifie PPM ?",
        options: [
          "Personal Performance Management",
          "Project Portfolio Management",
          "Process Performance Monitoring",
          "Program Planning Method"
        ],
        correctAnswers: [1],
        explanation: "PPM signifie Project Portfolio Management - la gestion du portefeuille de projets."
      }
    ]
  },
  {
    id: 8,
    title: "Cybersécurité, Risques & Conformité",
    shortTitle: "Cybersécurité",
    description: "Intégrer la sécurité et la conformité dans la stratégie de transformation digitale.",
    keyMessage: "La cybersécurité doit être intégrée dès la conception (Security by Design) et non en fin de projet.",
    bannerImage: module8Banner,
    sections: [
      {
        id: "8-1",
        title: "Enjeux de cybersécurité",
        content: [
          "La transformation digitale augmente l'exposition aux risques cyber :",
          "Menaces actuelles :",
          "• Ransomware : chiffrement des données avec demande de rançon",
          "• Phishing : usurpation d'identité pour voler des informations",
          "• Attaques DDoS : saturation des systèmes",
          "• Menaces internes : employés malveillants ou négligents",
          "• APT (Advanced Persistent Threats) : attaques ciblées et sophistiquées",
          "L'évolution du paysage cyber nécessite une vigilance constante et une adaptation continue des défenses.",
          "La cybersécurité n'est plus optionnelle, c'est un prérequis de la transformation."
        ],
        keyPoints: ["Menaces actuelles", "Ransomware", "Phishing", "APT"]
      },
      {
        id: "8-2",
        title: "Normes et référentiels de sécurité",
        content: [
          "Plusieurs normes encadrent la cybersécurité :",
          "ISO 27001 : système de management de la sécurité de l'information (SMSI)",
          "• Définit les exigences pour établir, implémenter et améliorer un SMSI",
          "• Approche basée sur les risques",
          "NIST Cybersecurity Framework :",
          "• 5 fonctions : Identify, Protect, Detect, Respond, Recover",
          "• Cadre flexible adapté à toutes les organisations",
          "RGPD (Règlement Général sur la Protection des Données) :",
          "• Protection des données personnelles des citoyens européens",
          "• Obligations : consentement, droit à l'oubli, notification des violations",
          "• Sanctions importantes en cas de non-conformité"
        ],
        keyPoints: ["ISO 27001", "NIST", "RGPD", "Conformité"]
      },
      {
        id: "8-3",
        title: "Stratégie de cybersécurité",
        content: [
          "Une stratégie de cybersécurité alignée sur le digital doit couvrir :",
          "Prévention :",
          "• Sécurité périmétrique (firewalls, IDS/IPS)",
          "• Gestion des identités et des accès (IAM)",
          "• Sensibilisation des utilisateurs",
          "Détection :",
          "• SOC (Security Operations Center)",
          "• SIEM (Security Information and Event Management)",
          "• Surveillance continue des menaces",
          "Réponse :",
          "• Plans de réponse aux incidents",
          "• Équipes d'intervention rapide",
          "• Communication de crise",
          "Security by Design : intégrer la sécurité dès la conception des projets."
        ],
        keyPoints: ["Prévention", "Détection", "Réponse", "Security by Design"]
      },
      {
        id: "8-4",
        title: "Gestion des risques et continuité",
        content: [
          "La gestion des risques digitaux comprend :",
          "Identification et évaluation des risques :",
          "• Cartographie des actifs critiques",
          "• Analyse des vulnérabilités",
          "• Évaluation des impacts potentiels",
          "Plans de traitement et de mitigation :",
          "• Transfert (assurance)",
          "• Réduction (contrôles)",
          "• Évitement (suppression)",
          "• Acceptation (risque résiduel)",
          "Continuité d'activité et résilience :",
          "• PCA (Plan de Continuité d'Activité) : maintenir les activités critiques",
          "• PRA (Plan de Reprise d'Activité) : redémarrer après un sinistre",
          "• Tests réguliers des plans de continuité"
        ],
        keyPoints: ["Cartographie des risques", "Mitigation", "PCA", "PRA"]
      }
    ],
    quiz: [
      {
        id: "q8-1",
        question: "Que signifie Security by Design ?",
        options: [
          "Concevoir des interfaces sécurisées",
          "Intégrer la sécurité dès la conception des projets",
          "Utiliser un design visuel sécurisant",
          "Sécuriser uniquement le design"
        ],
        correctAnswers: [1],
        explanation: "Security by Design signifie intégrer la sécurité dès la conception des projets, et non en fin de développement."
      },
      {
        id: "q8-2",
        question: "Quelles sont les 5 fonctions du NIST Cybersecurity Framework ?",
        options: [
          "Plan, Do, Check, Act, Review",
          "Identify, Protect, Detect, Respond, Recover",
          "Prevent, Detect, Analyze, Respond, Report",
          "Assess, Design, Implement, Test, Maintain"
        ],
        correctAnswers: [1],
        explanation: "Les 5 fonctions NIST sont : Identify, Protect, Detect, Respond, Recover."
      },
      {
        id: "q8-3",
        question: "Que signifient PCA et PRA ?",
        options: [
          "Plan de Communication et d'Action / Plan de Révision Annuelle",
          "Plan de Continuité d'Activité / Plan de Reprise d'Activité",
          "Programme de Contrôle Automatisé / Programme de Risques Analysés",
          "Processus de Certification Avancée / Processus de Révision Approfondie"
        ],
        correctAnswers: [1],
        explanation: "PCA = Plan de Continuité d'Activité (maintenir les activités critiques), PRA = Plan de Reprise d'Activité (redémarrer après un sinistre)."
      }
    ]
  },
  {
    id: 9,
    title: "Conduite du Changement & Adoption",
    shortTitle: "Changement",
    description: "Accompagner les équipes dans l'adoption des nouveaux outils et pratiques digitales.",
    keyMessage: "La technologie ne transforme rien sans l'adhésion et l'engagement des collaborateurs.",
    bannerImage: module9Banner,
    sections: [
      {
        id: "9-1",
        title: "Stratégie de changement",
        content: [
          "La conduite du changement est essentielle pour réussir la transformation :",
          "Modèles de conduite du changement :",
          "Kotter (8 étapes) : créer l'urgence, former une coalition, développer une vision, communiquer, lever les obstacles, générer des victoires rapides, consolider, ancrer dans la culture.",
          "ADKAR (Prosci) : Awareness (conscience), Desire (désir), Knowledge (connaissance), Ability (capacité), Reinforcement (renforcement).",
          "Ces modèles fournissent un cadre structuré pour accompagner le changement.",
          "L'analyse des parties prenantes permet d'identifier les alliés, les résistants et les indécis pour adapter l'approche."
        ],
        keyPoints: ["Modèle Kotter", "ADKAR", "Parties prenantes", "Cadre structuré"]
      },
      {
        id: "9-2",
        title: "Gestion des résistances",
        content: [
          "La résistance au changement est naturelle et doit être gérée :",
          "Causes de résistance :",
          "• Peur de l'inconnu et de perdre ses repères",
          "• Crainte de perdre des acquis ou du pouvoir",
          "• Manque de compréhension des enjeux",
          "• Expériences négatives passées avec le changement",
          "Stratégies pour gérer les résistances :",
          "• Communication transparente et régulière",
          "• Implication des collaborateurs dans les décisions",
          "• Formation et accompagnement personnalisé",
          "• Valorisation des early adopters",
          "• Prise en compte des feedbacks et ajustements"
        ],
        keyPoints: ["Causes de résistance", "Communication", "Implication", "Formation"]
      },
      {
        id: "9-3",
        title: "Plan de communication et d'engagement",
        content: [
          "Un plan de communication efficace est crucial :",
          "Objectifs de la communication :",
          "• Expliquer le pourquoi du changement (sens)",
          "• Décrire le comment (processus)",
          "• Rassurer sur les impacts individuels",
          "• Célébrer les succès et les progrès",
          "Canaux de communication :",
          "• Réunions d'équipe et town halls",
          "• Newsletter et intranet",
          "• Vidéos et témoignages",
          "• Managers comme relais de proximité",
          "Engagement des parties prenantes : identifier les champions du digital qui seront ambassadeurs du changement."
        ],
        keyPoints: ["Sens", "Canaux multiples", "Managers relais", "Champions"]
      },
      {
        id: "9-4",
        title: "Accompagnement et formation",
        content: [
          "L'accompagnement permet de développer les compétences nécessaires :",
          "Programmes de montée en compétences :",
          "• Formations aux nouveaux outils et processus",
          "• E-learning et micro-learning",
          "• Ateliers pratiques et simulations",
          "• Coaching individuel pour les fonctions clés",
          "Champions du digital et ambassadeurs :",
          "• Utilisateurs avancés qui aident leurs collègues",
          "• Relais terrain pour remonter les difficultés",
          "• Modèles positifs d'adoption",
          "Mesure de l'adoption :",
          "• Taux d'utilisation des nouveaux outils",
          "• Niveau de satisfaction des utilisateurs",
          "• Identification des points de blocage pour ajustements"
        ],
        keyPoints: ["Formation", "E-learning", "Champions", "Mesure de l'adoption"]
      }
    ],
    quiz: [
      {
        id: "q9-1",
        question: "Combien d'étapes compte le modèle de Kotter ?",
        options: ["5 étapes", "6 étapes", "8 étapes", "10 étapes"],
        correctAnswers: [2],
        explanation: "Le modèle de Kotter comprend 8 étapes pour conduire le changement avec succès."
      },
      {
        id: "q9-2",
        question: "Que signifie ADKAR ?",
        options: [
          "Analyse, Design, Knowledge, Action, Review",
          "Awareness, Desire, Knowledge, Ability, Reinforcement",
          "Assessment, Development, Knowledge, Adoption, Results",
          "Align, Define, Know, Act, Refine"
        ],
        correctAnswers: [1],
        explanation: "ADKAR signifie : Awareness (conscience), Desire (désir), Knowledge (connaissance), Ability (capacité), Reinforcement (renforcement)."
      },
      {
        id: "q9-3",
        question: "Quel est le rôle des Champions du digital ?",
        options: [
          "Développer les applications",
          "Aider leurs collègues et servir de modèle positif d'adoption",
          "Sanctionner les résistants",
          "Rédiger les procédures"
        ],
        correctAnswers: [1],
        explanation: "Les Champions du digital sont des utilisateurs avancés qui aident leurs collègues, servent de relais terrain et sont des modèles positifs d'adoption."
      }
    ]
  },
  {
    id: 10,
    title: "Préparation à la Certification CDTO",
    shortTitle: "Certification",
    description: "Se préparer efficacement à l'examen de certification Certified Digital Transformation Officer.",
    keyMessage: "L'étude de cas est déterminante : elle reflète la posture réelle du CDTO.",
    bannerImage: module10Banner,
    sections: [
      {
        id: "10-1",
        title: "Structure de l'examen CDTO",
        content: [
          "L'examen de certification CDTO comprend 3 épreuves :",
          "1. QCM Stratégiques (30% de la note finale) :",
          "• 40 à 60 questions à choix multiple",
          "• 1 ou plusieurs bonnes réponses possibles",
          "• Durée : 60 à 90 minutes",
          "• Thématiques : transformation digitale, gouvernance, stratégie, data, cloud, risques, conduite du changement",
          "• Seuil de réussite : 70% de bonnes réponses",
          "2. Questions de Raisonnement (20% de la note) :",
          "• 5 à 10 questions de mise en situation",
          "• Évalue la capacité à raisonner comme un CDTO (pas comme un technicien)",
          "• Durée : 45 à 60 minutes",
          "• Éléments évalués : logique stratégique, gouvernance, gestion des risques, vision transverse"
        ],
        keyPoints: ["QCM 30%", "Raisonnement 20%", "Posture CDTO", "Vision stratégique"]
      },
      {
        id: "10-2",
        title: "L'étude de cas (50% de la certification)",
        content: [
          "L'étude de cas est le cœur de la certification :",
          "Format :",
          "• Étude de cas contextualisée (administration, banque, entreprise)",
          "• Description de l'existant et problématiques métiers/organisationnelles",
          "• Durée : 2 à 3 heures",
          "Travail demandé - Le candidat doit proposer :",
          "1. Un diagnostic synthétique de l'existant",
          "2. Une vision et des axes de transformation",
          "3. Une feuille de route digitale structurée",
          "4. Un modèle de gouvernance adapté",
          "5. Une approche de gestion des risques",
          "6. Un plan de conduite du changement",
          "Note minimale : 60% sur l'étude de cas (obligatoire pour valider)"
        ],
        keyPoints: ["Étude de cas 50%", "6 livrables attendus", "60% minimum", "Approche complète"]
      },
      {
        id: "10-3",
        title: "Règles de validation",
        content: [
          "Pour obtenir la certification CDTO :",
          "Note minimale globale requise : 70/100",
          "Obligations spécifiques :",
          "• Obtenir au moins 60% à l'étude de cas (condition sine qua non)",
          "• Performance acceptable sur les QCM et questions de raisonnement",
          "Pondération des épreuves :",
          "• QCM stratégiques : 30%",
          "• Questions de raisonnement : 20%",
          "• Étude de cas : 50%",
          "En cas d'échec :",
          "• Possibilité de repasser l'examen",
          "• Analyse des points faibles pour amélioration ciblée",
          "L'étude de cas est déterminante car elle reflète la posture réelle du CDTO."
        ],
        keyPoints: ["70/100 global", "60% étude de cas", "Repasser possible", "Posture CDTO"],
        tables: [
          {
            headers: ["Épreuve", "Pondération"],
            rows: [
              ["QCM stratégiques", "30%"],
              ["Questions de raisonnement", "20%"],
              ["Étude de cas", "50%"]
            ]
          }
        ]
      },
      {
        id: "10-4",
        title: "Conseils de préparation",
        content: [
          "Pour réussir la certification CDTO :",
          "Préparation aux QCM :",
          "• Maîtriser les concepts clés de chaque module",
          "• S'entraîner avec des questions types",
          "• Comprendre le raisonnement derrière chaque réponse",
          "Préparation aux questions de raisonnement :",
          "• Adopter la posture du CDTO (pas du technicien)",
          "• Penser stratégie, gouvernance et valeur métier",
          "• Justifier chaque recommandation",
          "Préparation à l'étude de cas :",
          "• Pratiquer sur des cas réels ou fictifs",
          "• Structurer sa réponse selon les 6 livrables attendus",
          "• Gérer son temps (2-3h pour une réponse complète)",
          "• Focus sur la posture CDTO et la vision stratégique"
        ],
        keyPoints: ["Maîtrise des concepts", "Posture CDTO", "Entraînement pratique", "Gestion du temps"]
      }
    ],
    quiz: [
      {
        id: "q10-1",
        question: "Quelle est la pondération de l'étude de cas dans la certification ?",
        options: ["30%", "40%", "50%", "60%"],
        correctAnswers: [2],
        explanation: "L'étude de cas représente 50% de la note finale, ce qui en fait l'épreuve la plus importante."
      },
      {
        id: "q10-2",
        question: "Quelle note minimale faut-il obtenir pour valider la certification ?",
        options: ["60/100", "65/100", "70/100", "75/100"],
        correctAnswers: [2],
        explanation: "La note minimale globale requise est de 70/100 pour obtenir la certification CDTO."
      },
      {
        id: "q10-3",
        question: "Combien de livrables sont attendus dans l'étude de cas ?",
        options: ["4 livrables", "5 livrables", "6 livrables", "7 livrables"],
        correctAnswers: [2],
        explanation: "Les 6 livrables sont : diagnostic, vision/axes, feuille de route, gouvernance, gestion des risques, conduite du changement."
      },
      {
        id: "q10-4",
        question: "Quelle note minimale faut-il obtenir sur l'étude de cas ?",
        options: ["50%", "60%", "70%", "80%"],
        correctAnswers: [1],
        explanation: "Il faut obtenir au moins 60% à l'étude de cas pour valider la certification, même si la note globale est supérieure à 70%."
      }
    ]
  }
];

export const courseInfo = {
  title: "Formation à la certification Digital Transformation Chief Officer (CDTO)",
  subtitle: "Solutions Digitales & Formations",
  instructor: "Serge Alias Wilfried KY",
  credentials: "PMP, PRINCE 2, ISO 27001, COBIT5, SCRUM Master, ITILv4",
  organization: "VERINET",
  totalModules: 10,
  publicCible: [
    "Informaticiens seniors (DSI, chefs de projets, architectes SI, Ingénieurs Dev/AdminSys/Réseaux/Infras)",
    "Responsables SI / RSSI",
    "Consultants IT / AMOA",
    "Cadres techniques appelés à des fonctions de pilotage stratégique"
  ],
  objectifs: [
    "Piloter une transformation digitale de bout en bout",
    "Aligner stratégie, métiers, SI, données et gouvernance",
    "Concevoir et piloter un SDSI / feuille de route digitale",
    "Dialoguer efficacement avec la Direction Générale, les métiers et les partenaires",
    "Réussir l'examen de Certified Digital Transformation Officer (CDTO)"
  ],
  prerequis: "Compréhension fondamentale des concepts des technologies de l'information et connaissance générale de la transformation numérique",
  examInfo: {
    qcmWeight: 30,
    qcmQuestions: "40-60",
    qcmDuration: "60-90 min",
    qcmThreshold: 70,
    reasoningWeight: 20,
    reasoningQuestions: "5-10",
    reasoningDuration: "45-60 min",
    caseStudyWeight: 50,
    caseStudyDuration: "2-3h",
    caseStudyMinimum: 60,
    passingScore: 70
  }
};
