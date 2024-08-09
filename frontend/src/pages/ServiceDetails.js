import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import TopFifty from "./TopFifty.js";
import "./ServiceDetails.css";

const services = [
  {
    id: 1,
    name: "AI Consulting and Strategy Development",
    description:
      "AI Business Partners offers a comprehensive suite of AI consulting and strategy development services to help organizations leverage AI for business growth. Our tailored approach ensures that AI initiatives align with your strategic goals and deliver measurable value.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720528305/agile/aiConsultingRb_tncooe.png",
    details: {
      overview:
        "By leveraging our AI Consulting and Strategy Development services, your organization can confidently navigate the complexities of AI adoption, ensuring that initiatives are strategically aligned, technically feasible, and economically viable",
      keyServices: [
        {
          name: "AI Readiness Assessment",
          details: [
            "Current State Analysis: Evaluate existing systems, data sources, and processes.",
            "Capability Mapping: Identify strengths, weaknesses, opportunities, and threats in AI capabilities.",
            "Readiness Scorecard: Provide a detailed report on the organization’s AI readiness level.",
          ],
        },
        {
          name: "AI Strategy and Roadmap Development",
          details: [
            "Vision and Objectives Setting: Define the AI vision and key business objectives.",
            "Use Case Identification: Identify high-impact AI use cases tailored to your business.",
            "Roadmap Creation: Develop a phased implementation plan with clear milestones and timelines.",
            "Resource Planning: Plan for necessary resources, including technology, data, and talent.",
          ],
        },
        {
          name: "Use Case Feasibility and ROI Analysis",
          details: [
            "Technical Feasibility Study: Assess the technical requirements and challenges of potential AI projects.",
            "Economic Feasibility Analysis: Analyze the cost-benefit and ROI of identified AI use cases.",
            "Risk Assessment: Identify and evaluate potential risks and mitigation strategies.",
          ],
        },
        {
          name: "Data Strategy and Management",
          details: [
            "Data Audit: Evaluate existing data assets and identify gaps.",
            "Data Governance Framework: Establish policies and procedures for data management.",
            "Data Integration: Plan for the integration of disparate data sources.",
            "Data Quality Improvement: Implement processes to enhance data accuracy and consistency.",
          ],
        },
        {
          name: "AI Technology Stack and Architecture",
          details: [
            "Technology Evaluation: Assess and recommend AI tools, platforms, and frameworks.",
            "Architecture Design: Design scalable and flexible AI architecture.",
            "Integration Planning: Plan for seamless integration with existing systems.",
          ],
        },
        {
          name: "AI Governance and Ethical Framework",
          details: [
            "Governance Policies: Develop policies for AI oversight and accountability.",
            "Ethical Guidelines: Create ethical guidelines to ensure fair and transparent AI practices.",
            "Compliance and Regulations: Ensure adherence to relevant laws and regulations.",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Machine Learning Model Development",
    description:
      "AI Business Partners specializes in developing customized machine learning models that drive innovation and operational efficiency. Our expert team leverages cutting-edge machine learning algorithms to solve complex business challenges and deliver tangible results.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720528442/agile/machineLearningRb_ifj5jl.png",
    details: {
      overview:
        "Our Machine Learning Model Development services empower organizations to harness the power of data through advanced machine learning techniques, driving transformative business outcomes.",
      keyServices: [
        {
          name: "Model Design and Development",
          details: [
            "Requirements Gathering: Understand business objectives and data requirements.",
            "Model Selection: Identify the most suitable machine learning models for the project.",
            "Algorithm Development: Implement and optimize machine learning algorithms.",
            "Model Evaluation: Assess model performance and refine as needed.",
          ],
        },
        {
          name: "Training and Testing",
          details: [
            "Data Preparation: Clean, preprocess, and transform data for model training.",
            "Training Process: Train machine learning models using prepared data sets.",
            "Testing and Validation: Evaluate model accuracy and validate against real-world scenarios.",
          ],
        },
        {
          name: "Deployment and Integration",
          details: [
            "Deployment Strategy: Plan and execute the deployment of machine learning models.",
            "Integration Planning: Integrate models into existing systems and workflows.",
            "Performance Monitoring: Monitor model performance and implement updates as necessary.",
          ],
        },
        {
          name: "Support and Maintenance",
          details: [
            "Model Maintenance: Update models with new data and adapt to evolving business needs.",
            "Performance Optimization: Fine-tune models to improve efficiency and accuracy over time.",
            "Troubleshooting and Support: Provide ongoing support and troubleshooting for deployed models.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Data Analytics and Services",
    description:
      "AI Business Partners offers comprehensive data analytics services to transform raw data into actionable insights for strategic decision-making. Our services include data strategy and consulting, data collection and integration, data analysis and visualization, advanced analytics, and insights and reporting.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822219/agile/dataAnalyticsAndServices.png",
    details: {
      overview:
        "Our Data Analytics and Services empower organizations to harness the full potential of their data through advanced analytics techniques, enabling informed decision-making and operational excellence.",
      keyServices: [
        {
          name: "Data Strategy and Consulting",
          details: [
            "Needs Assessment: Identify business goals and data requirements.",
            "Data Governance: Establish policies for data management and compliance.",
          ],
        },
        {
          name: "Data Collection and Integration",
          details: [
            "Data Sourcing: Gather data from internal and external sources.",
            "Data Integration: Combine data from disparate sources into a unified dataset.",
          ],
        },
        {
          name: "Data Analysis and Visualization",
          details: [
            "Descriptive Analytics: Analyze historical data to identify trends and patterns.",
            "Predictive Analytics: Use statistical models to forecast future trends.",
            "Data Visualization: Create interactive dashboards and reports.",
          ],
        },
        {
          name: "Advanced Analytics",
          details: [
            "Machine Learning: Develop models to uncover deeper insights and predictions.",
            "Big Data Processing: Handle large datasets using advanced tools and technologies.",
          ],
        },
        {
          name: "Insights and Reporting",
          details: [
            "Actionable Insights: Provide recommendations based on data analysis.",
            "Custom Reports: Deliver tailored reports to meet specific business needs.",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: "Natural Language Processing (NLP) Services",
    description:
      "AI Business Partners provides advanced NLP services to help organizations leverage text data for improved decision-making and automation. Our services include text data collection and preparation, sentiment analysis, text classification and clustering, named entity recognition (NER), language translation and summarization, and chatbots and virtual assistants.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822249/agile/naturalLanguageProcessing.png",
    details: {
      overview:
        "Our NLP Services empower organizations to extract actionable insights from text data, enhance customer engagement through conversational AI, and automate business processes.",
      keyServices: [
        {
          name: "Text Data Collection and Preparation",
          details: [
            "Data Sourcing: Collect text data from various sources (documents, web, social media).",
            "Data Cleaning: Remove noise and preprocess text for analysis.",
          ],
        },
        {
          name: "Sentiment Analysis",
          details: [
            "Opinion Mining: Analyze customer sentiments and opinions from reviews and social media.",
            "Emotion Detection: Identify emotions expressed in text data.",
          ],
        },
        {
          name: "Text Classification and Clustering",
          details: [
            "Topic Modeling: Discover themes and topics within large text corpora.",
            "Document Categorization: Automatically classify documents into predefined categories.",
          ],
        },
        {
          name: "Named Entity Recognition (NER)",
          details: ["Entity Extraction: Identify and extract entities like names, dates, and locations from text."],
        },
        {
          name: "Language Translation and Summarization",
          details: [
            "Machine Translation: Provide automated translation services.",
            "Text Summarization: Generate concise summaries of long documents.",
          ],
        },
        {
          name: "Chatbots and Virtual Assistants",
          details: ["Conversational AI: Develop chatbots and virtual assistants for customer support and engagement."],
        },
      ],
    },
  },
  {
    id: 5,
    name: "Computer Vision Services",
    description:
      "AI Business Partners offers cutting-edge computer vision services to enable visual data analysis and automation. Our services include image and video processing, object detection and recognition, image classification, image segmentation, augmented reality (AR), and 3D reconstruction.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822276/agile/computerVision.png",
    details: {
      overview:
        "Our Computer Vision Services harness the power of visual data to enhance decision-making, automate processes, and create immersive experiences through augmented reality (AR) applications.",
      keyServices: [
        {
          name: "Image and Video Processing",
          details: [
            "Data Annotation: Label images and videos for training models.",
            "Preprocessing: Enhance and prepare visual data for analysis.",
          ],
        },
        {
          name: "Object Detection and Recognition",
          details: [
            "Object Detection: Identify and locate objects within images and videos.",
            "Facial Recognition: Detect and recognize faces for security and authentication.",
          ],
        },
        {
          name: "Image Classification",
          details: [
            "Category Assignment: Classify images into predefined categories.",
            "Scene Understanding: Analyze scenes and identify relevant objects and activities.",
          ],
        },
        {
          name: "Image Segmentation",
          details: [
            "Pixel-Level Segmentation: Partition images into meaningful segments.",
            "Instance Segmentation: Differentiate between individual objects within an image.",
          ],
        },
        {
          name: "Augmented Reality (AR)",
          details: [
            "AR Integration: Develop AR applications for enhanced user experiences.",
            "3D Reconstruction: Create 3D models from 2D images and video data.",
          ],
        },
      ],
    },
  },
  {
    id: 6,
    name: "Robotic Process Automation (RPA)",
    description:
      "AI Business Partners specializes in Robotic Process Automation (RPA) to streamline business operations and enhance efficiency. Our services include process assessment and automation strategy, bot development and deployment, process optimization, cognitive automation, governance and compliance, and training and support.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822308/agile/roboticsProcessAutomation.png",
    details: {
      overview:
        "Our RPA services leverage automation technology to optimize workflows, reduce operational costs, and improve accuracy and compliance.",
      keyServices: [
        {
          name: "Process Assessment and Automation Strategy",
          details: [
            "Workflow Analysis: Evaluate existing processes for automation feasibility.",
            "RPA Strategy: Develop a roadmap for RPA implementation aligned with business goals.",
          ],
        },
        {
          name: "Bot Development and Deployment",
          details: [
            "Bot Design: Design and configure bots to automate repetitive tasks.",
            "Integration: Integrate bots with existing IT systems for seamless operation.",
          ],
        },
        {
          name: "Process Optimization",
          details: [
            "Continuous Improvement: Identify opportunities for process optimization through RPA.",
            "Performance Monitoring: Monitor bot performance and analyze efficiency metrics.",
          ],
        },
        {
          name: "Cognitive Automation",
          details: [
            "Intelligent Automation: Incorporate AI and machine learning for cognitive capabilities.",
            "Natural Language Processing (NLP): Implement NLP-based bots for advanced interactions.",
          ],
        },
        {
          name: "Governance and Compliance",
          details: [
            "Security Measures: Ensure data security and compliance with regulatory standards.",
            "Governance Framework: Establish governance policies for RPA implementation.",
          ],
        },
        {
          name: "Training and Support",
          details: [
            "User Training: Provide training programs for users and stakeholders.",
            "24/7 Support: Offer ongoing support and maintenance for deployed bots.",
          ],
        },
      ],
    },
  },
  {
    id: 7,
    name: "AI-Driven Customer Service",
    description:
      "AI Business Partners provides AI-driven customer service solutions to enhance customer engagement and streamline support processes. Our services include chatbot development, virtual assistants, customer sentiment analysis, automated ticketing systems, and personalized customer experiences.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719809509/agile/aiConsulting.png",
    details: {
      overview:
        "Our AI-Driven Customer Service solutions utilize advanced AI technologies to deliver efficient and personalized support, improving customer satisfaction and reducing operational costs.",
      keyServices: [
        {
          name: "Chatbot Development",
          details: [
            "Conversational AI: Create chatbots that handle customer queries effectively.",
            "Multichannel Support: Integrate chatbots across multiple platforms.",
          ],
        },
        {
          name: "Virtual Assistants",
          details: [
            "Voice Assistants: Develop AI-powered voice assistants for customer interaction.",
            "Task Automation: Automate routine tasks to free up human agents.",
          ],
        },
        {
          name: "Customer Sentiment Analysis",
          details: [
            "Opinion Mining: Analyze customer feedback to gauge satisfaction.",
            "Emotion Detection: Identify customer emotions to tailor responses.",
          ],
        },
        {
          name: "Automated Ticketing Systems",
          details: [
            "Issue Tracking: Automate the tracking and resolution of customer issues.",
            "Prioritization: Automatically prioritize tickets based on urgency.",
          ],
        },
        {
          name: "Personalized Customer Experiences",
          details: [
            "Recommendation Engines: Suggest products or services based on customer data.",
            "Custom Interactions: Personalize interactions based on customer history.",
          ],
        },
      ],
    },
  },
  {
    id: 8,
    name: "Predictive Maintenance",
    description:
      "AI Business Partners offers predictive maintenance services to help organizations anticipate and prevent equipment failures. Our services include data collection and analysis, machine learning models, condition monitoring, failure prediction, and maintenance scheduling.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822188/agile/machineLearning.png",
    details: {
      overview:
        "Our Predictive Maintenance services leverage AI to optimize maintenance schedules, reduce downtime, and extend the lifespan of equipment.",
      keyServices: [
        {
          name: "Data Collection and Analysis",
          details: [
            "Sensor Data: Collect data from IoT sensors on equipment.",
            "Data Analysis: Analyze historical data to identify patterns.",
          ],
        },
        {
          name: "Machine Learning Models",
          details: [
            "Predictive Algorithms: Develop models to predict equipment failures.",
            "Anomaly Detection: Identify abnormal behavior in equipment performance.",
          ],
        },
        {
          name: "Condition Monitoring",
          details: [
            "Real-Time Monitoring: Continuously monitor equipment condition.",
            "Alert Systems: Generate alerts for potential issues.",
          ],
        },
        {
          name: "Failure Prediction",
          details: [
            "Proactive Maintenance: Predict failures before they occur.",
            "Risk Assessment: Assess the risk of equipment failure.",
          ],
        },
        {
          name: "Maintenance Scheduling",
          details: [
            "Optimized Scheduling: Create maintenance schedules based on predictions.",
            "Resource Allocation: Efficiently allocate resources for maintenance tasks.",
          ],
        },
      ],
    },
  },
  {
    id: 9,
    name: "Recommendation Systems",
    description:
      "AI Business Partners offers advanced recommendation systems to personalize user experiences and boost engagement. Our services include collaborative filtering, content-based filtering, hybrid recommendation models, user profiling, and real-time recommendations.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822219/agile/dataAnalyticsAndServices.png",
    details: {
      overview:
        "Our Recommendation Systems leverage AI to deliver personalized content and product recommendations, enhancing user satisfaction and increasing conversion rates.",
      keyServices: [
        {
          name: "Collaborative Filtering",
          details: [
            "User-Based Filtering: Recommend items based on user similarity.",
            "Item-Based Filtering: Recommend items similar to those a user has liked.",
          ],
        },
        {
          name: "Content-Based Filtering",
          details: [
            "Profile Matching: Recommend items matching user profiles.",
            "Feature Extraction: Analyze item features for recommendation.",
          ],
        },
        {
          name: "Hybrid Recommendation Models",
          details: [
            "Combining Methods: Integrate multiple recommendation techniques.",
            "Enhanced Accuracy: Improve recommendation accuracy with hybrid models.",
          ],
        },
        {
          name: "User Profiling",
          details: [
            "Behavior Analysis: Analyze user behavior for personalized recommendations.",
            "Preference Learning: Learn user preferences over time.",
          ],
        },
        {
          name: "Real-Time Recommendations",
          details: [
            "Instant Suggestions: Provide recommendations in real-time.",
            "Dynamic Adaptation: Adapt recommendations based on user interactions.",
          ],
        },
      ],
    },
  },
  {
    id: 10,
    name: "Fraud Detection and Security",
    description:
      "AI Business Partners provides AI-powered fraud detection and security services to protect organizations from fraudulent activities and security threats. Our services include anomaly detection, transaction monitoring, identity verification, threat intelligence, and risk assessment.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822276/agile/computerVision.png",
    details: {
      overview:
        "Our Fraud Detection and Security services leverage AI to identify and mitigate fraudulent activities and security threats, ensuring the safety and integrity of your operations.",
      keyServices: [
        {
          name: "Anomaly Detection",
          details: [
            "Pattern Recognition: Identify unusual patterns in data.",
            "Real-Time Alerts: Generate alerts for suspicious activities.",
          ],
        },
        {
          name: "Transaction Monitoring",
          details: [
            "Continuous Monitoring: Monitor transactions for fraudulent behavior.",
            "Rule-Based Alerts: Set up rules to trigger alerts on suspicious transactions.",
          ],
        },
        {
          name: "Identity Verification",
          details: [
            "Biometric Verification: Use biometrics for secure identity verification.",
            "Document Verification: Verify identity documents using AI.",
          ],
        },
        {
          name: "Threat Intelligence",
          details: [
            "Data Analysis: Analyze data to identify potential threats.",
            "Proactive Defense: Implement proactive measures to prevent threats.",
          ],
        },
        {
          name: "Risk Assessment",
          details: [
            "Vulnerability Assessment: Identify and assess vulnerabilities.",
            "Risk Mitigation: Develop strategies to mitigate identified risks.",
          ],
        },
      ],
    },
  },
  {
    id: 11,
    name: "AI Integration and Deployment",
    description:
      "AI Business Partners offers comprehensive AI integration and deployment services to seamlessly embed AI solutions into existing systems. Our services include AI model integration, system integration, deployment strategy, performance tuning, and ongoing support.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822276/agile/computerVision.png",
    details: {
      overview:
        "Our AI Integration and Deployment services ensure that AI models are effectively integrated and optimized within your existing infrastructure, maximizing their impact and efficiency.",
      keyServices: [
        {
          name: "AI Model Integration",
          details: [
            "API Integration: Integrate AI models via APIs for easy access.",
            "Custom Integration: Tailor AI model integration to fit specific needs.",
          ],
        },
        {
          name: "System Integration",
          details: [
            "IT Systems Integration: Connect AI solutions with current IT systems.",
            "Data Integration: Ensure seamless data flow between systems and AI models.",
          ],
        },
        {
          name: "Deployment Strategy",
          details: [
            "Planning: Develop a strategic plan for AI deployment.",
            "Implementation: Execute the deployment plan efficiently.",
          ],
        },
        {
          name: "Performance Tuning",
          details: [
            "Optimization: Fine-tune AI models for optimal performance.",
            "Monitoring: Continuously monitor AI performance and make adjustments.",
          ],
        },
        {
          name: "Ongoing Support",
          details: [
            "Technical Support: Provide ongoing technical support post-deployment.",
            "Maintenance: Regularly update and maintain AI systems.",
          ],
        },
      ],
    },
  },
  {
    id: 12,
    name: "Voice Recognition and Speech-to-Text",
    description:
      "AI Business Partners offers advanced voice recognition and speech-to-text services to convert spoken language into written text accurately. Our services include voice command systems, transcription services, speech analytics, multilingual support, and real-time processing.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822308/agile/roboticsProcessAutomation.png",
    details: {
      overview:
        "Our Voice Recognition and Speech-to-Text services harness the power of AI to deliver high-accuracy transcription and voice command solutions, enhancing user interaction and data accessibility.",
      keyServices: [
        {
          name: "Voice Command Systems",
          details: [
            "Voice-Activated Control: Develop systems that respond to voice commands.",
            "Integration: Integrate voice control with various applications.",
          ],
        },
        {
          name: "Transcription Services",
          details: [
            "Automated Transcription: Convert speech to text quickly and accurately.",
            "Customizable Formats: Provide transcriptions in various formats.",
          ],
        },
        {
          name: "Speech Analytics",
          details: [
            "Sentiment Analysis: Analyze emotions and sentiments from speech.",
            "Voice Biometrics: Identify and authenticate users through voice.",
          ],
        },
        {
          name: "Multilingual Support",
          details: [
            "Language Recognition: Support for multiple languages and dialects.",
            "Translation: Offer real-time translation of spoken language.",
          ],
        },
        {
          name: "Real-Time Processing",
          details: [
            "Instant Transcription: Convert speech to text in real-time.",
            "Live Interaction: Enable live voice interactions with systems.",
          ],
        },
      ],
    },
  },
  {
    id: 13,
    name: "AI for Supply Chain Optimization",
    description:
      "AI Business Partners provides AI-driven solutions for optimizing supply chains, enhancing efficiency, and reducing costs. Our services include demand forecasting, inventory management, logistics optimization, supplier management, and real-time tracking.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719809509/agile/aiConsulting.png",
    details: {
      overview:
        "Our AI for Supply Chain Optimization services use advanced algorithms to streamline operations, improve accuracy, and boost supply chain efficiency.",
      keyServices: [
        {
          name: "Demand Forecasting",
          details: [
            "Predictive Analytics: Forecast demand using historical data and AI.",
            "Trend Analysis: Identify and analyze market trends.",
          ],
        },
        {
          name: "Inventory Management",
          details: [
            "Stock Optimization: Optimize inventory levels to reduce costs.",
            "Automated Replenishment: Use AI to automate stock replenishment.",
          ],
        },
        {
          name: "Logistics Optimization",
          details: [
            "Route Planning: Optimize delivery routes for efficiency.",
            "Freight Management: Use AI for better freight allocation.",
          ],
        },
        {
          name: "Supplier Management",
          details: [
            "Supplier Performance: Evaluate and manage supplier performance.",
            "Risk Mitigation: Identify and mitigate supply chain risks.",
          ],
        },
        {
          name: "Real-Time Tracking",
          details: [
            "Live Tracking: Monitor goods in transit in real-time.",
            "Status Updates: Provide real-time updates on shipment status.",
          ],
        },
      ],
    },
  },
  {
    id: 14,
    name: "Healthcare AI Solutions",
    description:
      "AI Business Partners delivers innovative AI solutions tailored for the healthcare sector, aiming to improve patient outcomes and operational efficiency. Our services include medical imaging analysis, predictive analytics, patient data management, virtual health assistants, and personalized treatment plans.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822188/agile/machineLearning.png",
    details: {
      overview:
        "Our Healthcare AI Solutions leverage cutting-edge technology to transform healthcare delivery, enhancing diagnosis, treatment, and patient care.",
      keyServices: [
        {
          name: "Medical Imaging Analysis",
          details: [
            "Diagnostic Imaging: Analyze medical images for accurate diagnosis.",
            "Image Segmentation: Segment images to highlight areas of interest.",
          ],
        },
        {
          name: "Predictive Analytics",
          details: [
            "Disease Prediction: Predict the likelihood of diseases using AI.",
            "Patient Risk Assessment: Assess patient risk based on historical data.",
          ],
        },
        {
          name: "Patient Data Management",
          details: [
            "Electronic Health Records (EHR): Manage and analyze patient data.",
            "Data Integration: Integrate data from multiple healthcare systems.",
          ],
        },
        {
          name: "Virtual Health Assistants",
          details: [
            "Remote Monitoring: Monitor patient health remotely using AI.",
            "Telehealth: Provide virtual consultations and support.",
          ],
        },
        {
          name: "Personalized Treatment Plans",
          details: [
            "Treatment Optimization: Develop personalized treatment plans.",
            "Outcome Prediction: Predict treatment outcomes using AI.",
          ],
        },
      ],
    },
  },
  {
    id: 15,
    name: "AI Ethics and Governance",
    description:
      "AI Business Partners provides guidance on AI ethics and governance to ensure responsible AI development and deployment. Our services include ethical AI frameworks, bias detection and mitigation, regulatory compliance, transparency and explainability, and ethical AI training.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822249/agile/naturalLanguageProcessing.png",
    details: {
      overview:
        "Our AI Ethics and Governance services help organizations develop and implement AI solutions that are ethical, transparent, and compliant with regulatory standards.",
      keyServices: [
        {
          name: "Ethical AI Frameworks",
          details: [
            "Guidelines: Develop frameworks for ethical AI development.",
            "Best Practices: Implement industry best practices for AI ethics.",
          ],
        },
        {
          name: "Bias Detection and Mitigation",
          details: [
            "Bias Analysis: Identify and analyze biases in AI models.",
            "Mitigation Strategies: Develop strategies to mitigate biases.",
          ],
        },
        {
          name: "Regulatory Compliance",
          details: [
            "Compliance Monitoring: Ensure compliance with relevant regulations.",
            "Documentation: Maintain documentation for regulatory purposes.",
          ],
        },
        {
          name: "Transparency and Explainability",
          details: [
            "Model Explainability: Make AI models transparent and explainable.",
            "User Trust: Enhance user trust through transparency.",
          ],
        },
        {
          name: "Ethical AI Training",
          details: [
            "Training Programs: Provide training on ethical AI practices.",
            "Awareness: Raise awareness about AI ethics among stakeholders.",
          ],
        },
      ],
    },
  },
  {
    id: 16,
    name: "Personalized Marketing and Advertising",
    description:
      "AI Business Partners delivers AI-driven personalized marketing and advertising solutions to enhance customer engagement and conversion rates. Our services include targeted advertising, customer segmentation, personalized content, campaign optimization, and predictive analytics.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822276/agile/computerVision.png",
    details: {
      overview:
        "Our Personalized Marketing and Advertising solutions use AI to deliver highly targeted and effective marketing campaigns, improving customer engagement and driving sales.",
      keyServices: [
        {
          name: "Targeted Advertising",
          details: [
            "Audience Targeting: Target ads to specific audience segments.",
            "Ad Personalization: Personalize ads based on user data.",
          ],
        },
        {
          name: "Customer Segmentation",
          details: [
            "Behavioral Segmentation: Segment customers based on behavior.",
            "Demographic Segmentation: Segment customers based on demographics.",
          ],
        },
        {
          name: "Personalized Content",
          details: [
            "Content Customization: Create personalized content for users.",
            "Dynamic Content: Use AI to deliver dynamic content based on user interactions.",
          ],
        },
        {
          name: "Campaign Optimization",
          details: [
            "Performance Analysis: Analyze campaign performance using AI.",
            "Optimization Strategies: Develop strategies to optimize campaigns.",
          ],
        },
        {
          name: "Predictive Analytics",
          details: [
            "Customer Insights: Use predictive analytics to gain customer insights.",
            "Future Trends: Predict future marketing trends and opportunities.",
          ],
        },
      ],
    },
  },
  {
    id: 17,
    name: "Virtual Agents and Assistants",
    description:
      "AI Business Partners develops advanced virtual agents and assistants to enhance customer support and automate routine tasks. Our services include conversational AI, natural language processing (NLP), voice assistants, chatbot development, and AI-driven customer support.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822308/agile/roboticsProcessAutomation.png",
    details: {
      overview:
        "Our Virtual Agents and Assistants services use AI to create intelligent and responsive virtual assistants, improving customer interactions and operational efficiency.",
      keyServices: [
        {
          name: "Conversational AI",
          details: [
            "Natural Conversations: Develop AI that understands and responds naturally.",
            "Contextual Understanding: Ensure AI can understand and retain context.",
          ],
        },
        {
          name: "Natural Language Processing (NLP)",
          details: [
            "Language Understanding: Enable AI to understand and interpret human language.",
            "Sentiment Analysis: Analyze customer sentiment from conversations.",
          ],
        },
        {
          name: "Voice Assistants",
          details: [
            "Voice Interaction: Develop AI that interacts with users via voice.",
            "Voice Command: Implement voice commands for various applications.",
          ],
        },
        {
          name: "Chatbot Development",
          details: [
            "Customer Support Bots: Create chatbots for customer support.",
            "Automated Responses: Develop bots that provide automated responses to common queries.",
          ],
        },
        {
          name: "AI-Driven Customer Support",
          details: [
            "24/7 Support: Provide round-the-clock customer support via AI.",
            "Efficiency: Improve support efficiency with AI-driven solutions.",
          ],
        },
      ],
    },
  },
  {
    id: 18,
    name: "AI Training and Education",
    description:
      "AI Business Partners offers AI training and education services to help organizations and individuals develop AI skills. Our services include AI workshops, online courses, certification programs, hands-on training, and AI literacy programs.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719809509/agile/aiConsulting.png",
    details: {
      overview:
        "Our AI Training and Education services provide comprehensive training to equip participants with the knowledge and skills needed to excel in the field of AI.",
      keyServices: [
        {
          name: "AI Workshops",
          details: [
            "Interactive Workshops: Conduct workshops on various AI topics.",
            "Expert Instructors: Learn from industry experts.",
          ],
        },
        {
          name: "Online Courses",
          details: [
            "Flexible Learning: Offer online courses for flexible learning.",
            "Comprehensive Curriculum: Cover a wide range of AI topics.",
          ],
        },
        {
          name: "Certification Programs",
          details: [
            "Certified Training: Provide certification upon completion of courses.",
            "Industry Recognition: Gain recognition with industry-validated certifications.",
          ],
        },
        {
          name: "Hands-On Training",
          details: [
            "Practical Experience: Offer hands-on training with real-world projects.",
            "Skill Development: Focus on developing practical AI skills.",
          ],
        },
        {
          name: "AI Literacy Programs",
          details: [
            "Awareness: Raise awareness about AI among non-technical audiences.",
            "Foundational Knowledge: Provide foundational knowledge of AI concepts.",
          ],
        },
      ],
    },
  },

  // More services here...
];

const ServiceDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const { id } = useParams();
  const serviceId = parseInt(id);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="service-details">
      <Row>
        <Col>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <h3>Overview</h3>
          <p>{service.details.overview}</p>
          <h3>Key Services</h3>
          {service.details.keyServices.map((keyService, index) => (
            <div key={index} className={`key-service ${index === activeIndex ? "active" : ""}`}>
              <h4 onClick={() => handleAccordionClick(index)}>{keyService.name}</h4>
              <ul style={{ display: index === activeIndex ? "block" : "none" }}>
                {keyService.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </Col>
        {/* <Col md={4}>
          <img src={service.img} alt={service.name} className="service-image" />
        </Col> */}
      </Row>
    </div>
  );
};

export default ServiceDetails;
