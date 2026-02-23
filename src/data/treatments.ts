import { Bone, Activity, Repeat, Leaf, PersonStanding, Dumbbell, LucideIcon, CheckCircle2, ArrowRight, Clock, Star, Users } from "lucide-react";

export interface TreatmentData {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroDescription: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  transformations: { name: string; age: string; condition: string; result: string; duration: string }[];
  faq: { question: string; answer: string }[];
}

export const treatmentsData: TreatmentData[] = [
  {
    slug: "fisioterapia-ortopedica",
    icon: Bone,
    title: "Fisioterapia Ortopédica",
    subtitle: "Recuperação funcional para dores articulares, musculares e ósseas",
    heroDescription: "Nosso programa de fisioterapia ortopédica combina avaliação biomecânica detalhada com técnicas manuais avançadas e exercícios terapêuticos personalizados para restaurar sua função e eliminar a dor de forma definitiva.",
    benefits: [
      "Alívio eficaz de dores crônicas e agudas",
      "Restauração completa da amplitude de movimento",
      "Fortalecimento muscular direcionado",
      "Prevenção de recidivas e novas lesões",
      "Melhora da postura e biomecânica corporal",
      "Retorno seguro às atividades diárias",
    ],
    process: [
      { step: 1, title: "Avaliação Completa", description: "Realizamos uma avaliação física detalhada, analisando postura, mobilidade, força e padrões de movimento para identificar a causa raiz da sua dor." },
      { step: 2, title: "Plano Personalizado", description: "Com base na avaliação, criamos um protocolo de tratamento exclusivo, com metas claras e prazos definidos para sua recuperação." },
      { step: 3, title: "Tratamento Ativo", description: "Sessões que combinam terapia manual, exercícios terapêuticos e recursos tecnológicos de última geração para resultados acelerados." },
      { step: 4, title: "Alta e Prevenção", description: "Ao atingir suas metas, você recebe um programa de manutenção domiciliar para garantir que os resultados sejam duradouros." },
    ],
    transformations: [
      { name: "Marcos A.", age: "52 anos", condition: "Hérnia de disco lombar com dor irradiada para a perna", result: "Eliminação completa da dor e retorno às caminhadas diárias", duration: "8 semanas" },
      { name: "Patrícia L.", age: "38 anos", condition: "Tendinite no ombro com limitação de movimento", result: "Amplitude total restaurada e volta à academia sem dor", duration: "6 semanas" },
      { name: "Roberto C.", age: "65 anos", condition: "Artrose no joelho com dificuldade para subir escadas", result: "Redução de 90% da dor e independência funcional completa", duration: "10 semanas" },
    ],
    faq: [
      { question: "Quantas sessões são necessárias?", answer: "O número varia conforme a condição, mas em média nossos pacientes alcançam resultados significativos entre 8 e 12 sessões." },
      { question: "Sentirei dor durante o tratamento?", answer: "Nosso objetivo é aliviar a dor, não causá-la. Algumas técnicas podem gerar leve desconforto momentâneo, mas sempre dentro do seu limite de tolerância." },
      { question: "Preciso de encaminhamento médico?", answer: "Não é obrigatório. Você pode agendar diretamente sua avaliação conosco. Se necessário, encaminharemos para exames complementares." },
    ],
  },
  {
    slug: "reabilitacao-esportiva",
    icon: Activity,
    title: "Reabilitação Esportiva",
    subtitle: "Recuperação rápida e segura para atletas de todos os níveis",
    heroDescription: "Nosso programa de reabilitação esportiva utiliza protocolos baseados em evidências científicas para acelerar sua recuperação de lesões, restaurar o desempenho e prevenir recidivas, permitindo que você volte ao esporte com confiança.",
    benefits: [
      "Recuperação até 40% mais rápida que métodos tradicionais",
      "Retorno seguro ao esporte com menor risco de re-lesão",
      "Avaliação biomecânica do gesto esportivo",
      "Fortalecimento funcional específico para seu esporte",
      "Programas de prevenção de lesões personalizados",
      "Acompanhamento com indicadores objetivos de progresso",
    ],
    process: [
      { step: 1, title: "Diagnóstico Funcional", description: "Avaliação completa da lesão com testes funcionais específicos do esporte e análise biomecânica detalhada." },
      { step: 2, title: "Fase de Proteção", description: "Controle da inflamação e dor com técnicas avançadas, mantendo condicionamento geral sem agravar a lesão." },
      { step: 3, title: "Reabilitação Funcional", description: "Progressão gradual com exercícios que simulam as demandas do seu esporte, reconstruindo força e confiança." },
      { step: 4, title: "Retorno ao Esporte", description: "Testes funcionais objetivos para garantir que você está pronto para voltar à competição com segurança total." },
    ],
    transformations: [
      { name: "Lucas M.", age: "28 anos", condition: "Ruptura parcial do ligamento cruzado anterior", result: "Retorno ao futebol competitivo sem necessidade de cirurgia", duration: "12 semanas" },
      { name: "Fernanda S.", age: "34 anos", condition: "Fascite plantar crônica em corredora", result: "Completou meia-maratona sem dor após o tratamento", duration: "8 semanas" },
      { name: "Diego R.", age: "22 anos", condition: "Lesão muscular na coxa durante jogo de futebol", result: "Recuperação completa e volta aos treinos em tempo recorde", duration: "4 semanas" },
    ],
    faq: [
      { question: "Posso continuar treinando durante o tratamento?", answer: "Sim, adaptamos seu treino para manter o condicionamento sem comprometer a recuperação da lesão." },
      { question: "Atendem atletas amadores?", answer: "Absolutamente! Nossos protocolos são adaptados para atletas de todos os níveis, do recreativo ao profissional." },
      { question: "Como sei que estou pronto para voltar ao esporte?", answer: "Utilizamos critérios objetivos como testes de força, equilíbrio e funcionalidade para certificar seu retorno seguro." },
    ],
  },
  {
    slug: "rpg",
    icon: Repeat,
    title: "RPG — Reeducação Postural Global",
    subtitle: "Correção postural completa para alívio de dores crônicas",
    heroDescription: "A Reeducação Postural Global é uma abordagem terapêutica que trata o corpo como um todo, corrigindo desvios posturais e cadeias musculares encurtadas para eliminar dores crônicas de forma definitiva e duradoura.",
    benefits: [
      "Correção de desvios posturais como escoliose e hiperlordose",
      "Alívio de dores crônicas na coluna, pescoço e ombros",
      "Melhora da flexibilidade e consciência corporal",
      "Prevenção de degenerações articulares precoces",
      "Respiração mais eficiente e profunda",
      "Melhora estética da postura e silhueta",
    ],
    process: [
      { step: 1, title: "Análise Postural", description: "Avaliação fotográfica e palpatória detalhada para mapear todas as alterações posturais e cadeias musculares envolvidas." },
      { step: 2, title: "Diagnóstico das Cadeias", description: "Identificação das cadeias musculares encurtadas que estão gerando compensações e dores no seu corpo." },
      { step: 3, title: "Sessões de RPG", description: "Posturas terapêuticas sustentadas que alongam e reequilibram as cadeias musculares de forma progressiva e suave." },
      { step: 4, title: "Reeducação Corporal", description: "Orientações posturais para o dia a dia que mantêm os resultados e previnem o retorno das alterações." },
    ],
    transformations: [
      { name: "Carla B.", age: "45 anos", condition: "Dor lombar crônica por hiperlordose há 10 anos", result: "Eliminação da dor e correção postural visível em fotos comparativas", duration: "12 semanas" },
      { name: "Thiago P.", age: "30 anos", condition: "Dor cervical e cefaleia por postura de escritório", result: "Zero episódios de cefaleia e postura corrigida", duration: "8 semanas" },
      { name: "Mariana K.", age: "55 anos", condition: "Escoliose com dor e limitação funcional", result: "Redução significativa da curvatura e vida sem dor", duration: "16 semanas" },
    ],
    faq: [
      { question: "O RPG dói?", answer: "As posturas podem gerar uma sensação de alongamento intenso, mas nunca dor aguda. Respeitamos sempre seu limite." },
      { question: "Com que frequência devo fazer?", answer: "Recomendamos uma a duas sessões semanais para resultados consistentes e duradouros." },
      { question: "Em quanto tempo verei resultados?", answer: "Muitos pacientes relatam melhora já nas primeiras sessões, com resultados posturais visíveis a partir de 4 semanas." },
    ],
  },
  {
    slug: "acupuntura",
    icon: Leaf,
    title: "Acupuntura",
    subtitle: "Técnica milenar integrada à fisioterapia moderna",
    heroDescription: "Nossa abordagem combina a sabedoria milenar da acupuntura com a ciência da fisioterapia moderna, proporcionando alívio eficaz de dores, redução do estresse e aceleração da recuperação funcional de forma natural e segura.",
    benefits: [
      "Alívio rápido de dores agudas e crônicas",
      "Redução de estresse, ansiedade e insônia",
      "Aceleração da recuperação de lesões",
      "Melhora da circulação sanguínea e linfática",
      "Sem efeitos colaterais medicamentosos",
      "Potencialização dos resultados da fisioterapia",
    ],
    process: [
      { step: 1, title: "Avaliação Energética", description: "Análise dos meridianos e pontos de energia para identificar desequilíbrios que estão contribuindo para seus sintomas." },
      { step: 2, title: "Plano Terapêutico", description: "Seleção dos pontos de acupuntura mais indicados para sua condição, combinando tradição e evidência científica." },
      { step: 3, title: "Sessões de Acupuntura", description: "Aplicação precisa de agulhas filiformes em pontos estratégicos, em ambiente acolhedor e relaxante." },
      { step: 4, title: "Integração com Fisioterapia", description: "Combinação com técnicas de fisioterapia para potencializar os resultados e promover recuperação completa." },
    ],
    transformations: [
      { name: "Beatriz M.", age: "42 anos", condition: "Enxaqueca crônica com 3+ episódios semanais", result: "Redução para menos de 1 episódio por mês", duration: "6 semanas" },
      { name: "João V.", age: "60 anos", condition: "Dor no ombro resistente a tratamentos convencionais", result: "Alívio completo da dor com acupuntura integrada à fisioterapia", duration: "8 semanas" },
      { name: "Renata F.", age: "35 anos", condition: "Insônia e dor lombar por estresse profissional", result: "Sono restaurado e dor eliminada sem medicação", duration: "5 semanas" },
    ],
    faq: [
      { question: "As agulhas doem?", answer: "As agulhas são extremamente finas (0,25mm). A maioria dos pacientes sente apenas uma leve pressão, muitos até adormecem durante a sessão." },
      { question: "A acupuntura tem base científica?", answer: "Sim! Diversos estudos da OMS comprovam sua eficácia para dor, inflamação e diversas condições musculoesqueléticas." },
      { question: "Quantas sessões são necessárias?", answer: "Em geral, 6 a 10 sessões são suficientes para condições agudas. Condições crônicas podem necessitar de mais sessões." },
    ],
  },
  {
    slug: "fisioterapia-geriatrica",
    icon: PersonStanding,
    title: "Fisioterapia Geriátrica",
    subtitle: "Cuidado especializado para qualidade de vida na maturidade",
    heroDescription: "Nosso programa geriátrico é cuidadosamente desenvolvido para melhorar mobilidade, equilíbrio e independência funcional, permitindo que você viva com mais segurança, autonomia e qualidade de vida.",
    benefits: [
      "Melhora do equilíbrio e prevenção de quedas",
      "Fortalecimento muscular adaptado e seguro",
      "Maior independência nas atividades diárias",
      "Alívio de dores articulares e musculares",
      "Melhora da capacidade cardiorrespiratória",
      "Socialização e bem-estar emocional",
    ],
    process: [
      { step: 1, title: "Avaliação Geriátrica", description: "Avaliação funcional completa incluindo equilíbrio, marcha, força, cognição e risco de quedas." },
      { step: 2, title: "Programa Individualizado", description: "Plano de exercícios personalizado respeitando suas condições de saúde e objetivos pessoais." },
      { step: 3, title: "Sessões Supervisionadas", description: "Exercícios terapêuticos em ambiente seguro com acompanhamento próximo e motivação constante." },
      { step: 4, title: "Autonomia e Manutenção", description: "Programa domiciliar com exercícios simples e seguros para manter os ganhos alcançados." },
    ],
    transformations: [
      { name: "Dona Helena", age: "78 anos", condition: "Medo de cair após fratura no quadril", result: "Recuperação da confiança e independência para caminhar sozinha", duration: "12 semanas" },
      { name: "Sr. Antônio", age: "72 anos", condition: "Perda de força e dificuldade para levantar da cadeira", result: "Voltou a fazer caminhadas no parque e brincar com os netos", duration: "10 semanas" },
      { name: "Dona Maria", age: "68 anos", condition: "Dores generalizadas e sedentarismo após aposentadoria", result: "Vida ativa com grupo de caminhada e sem dores", duration: "8 semanas" },
    ],
    faq: [
      { question: "Tem limite de idade?", answer: "Não! Atendemos pacientes de todas as idades, adaptando os exercícios à capacidade individual de cada um." },
      { question: "É seguro para quem tem osteoporose?", answer: "Sim, nossos protocolos são especialmente adaptados para condições como osteoporose, com exercícios seguros e eficazes." },
      { question: "Posso trazer um acompanhante?", answer: "Claro! Incentivamos a presença de familiares para que possam auxiliar nos exercícios em casa." },
    ],
  },
  {
    slug: "pilates-terapeutico",
    icon: Dumbbell,
    title: "Pilates Terapêutico",
    subtitle: "Exercícios inteligentes que fortalecem e reabilitam",
    heroDescription: "O Pilates Terapêutico vai além do pilates convencional — é um programa de exercícios supervisionado por fisioterapeutas que combina os princípios do pilates com objetivos terapêuticos específicos para reabilitar, fortalecer e prevenir lesões.",
    benefits: [
      "Fortalecimento do core e estabilidade da coluna",
      "Melhora da flexibilidade e mobilidade articular",
      "Correção postural com exercícios funcionais",
      "Reabilitação de lesões com baixo impacto",
      "Alívio de dores na coluna e articulações",
      "Melhora da consciência corporal e coordenação",
    ],
    process: [
      { step: 1, title: "Avaliação Funcional", description: "Análise completa de postura, mobilidade, força e estabilidade para definir seus objetivos terapêuticos." },
      { step: 2, title: "Programa Personalizado", description: "Seleção de exercícios específicos no solo e em equipamentos, adaptados às suas necessidades e limitações." },
      { step: 3, title: "Sessões Terapêuticas", description: "Aulas em grupos reduzidos ou individuais com supervisão direta do fisioterapeuta em cada exercício." },
      { step: 4, title: "Evolução Progressiva", description: "Aumento gradual de complexidade e intensidade conforme sua melhora, com reavaliações periódicas." },
    ],
    transformations: [
      { name: "Camila R.", age: "40 anos", condition: "Dor lombar crônica após duas gestações", result: "Fortalecimento do core e eliminação completa da dor lombar", duration: "10 semanas" },
      { name: "Eduardo S.", age: "50 anos", condition: "Hérnia de disco cervical com dor nos braços", result: "Recuperação funcional completa e retorno ao tênis", duration: "12 semanas" },
      { name: "Lúcia A.", age: "62 anos", condition: "Osteoartrite nos joelhos com rigidez matinal", result: "Flexibilidade restaurada e caminhadas diárias sem limitação", duration: "8 semanas" },
    ],
    faq: [
      { question: "Qual a diferença do pilates terapêutico para o convencional?", answer: "O terapêutico é supervisionado por fisioterapeutas e focado em objetivos de reabilitação específicos, não apenas condicionamento físico." },
      { question: "Preciso ter experiência com pilates?", answer: "Não! Começamos do zero, ensinando cada movimento de forma gradual e segura." },
      { question: "É indicado para quem tem hérnia de disco?", answer: "Sim, é um dos melhores métodos para reabilitação de hérnias discais, desde que supervisionado por fisioterapeuta." },
    ],
  },
];

export const getTreatmentBySlug = (slug: string): TreatmentData | undefined =>
  treatmentsData.find((t) => t.slug === slug);
