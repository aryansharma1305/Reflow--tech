export interface ServiceTab {
    id: string;
    title: string;
    description: string;
    features: string[];
    tag?: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    price?: string;
    features: string[];
    specs?: Record<string, string>;
    services?: ServiceTab[];
    image?: string;
    category: "hardware" | "service";
}

export const products: Product[] = [
    {
        id: "alpha-x",
        name: "Alpha X",
        description:
            "Multi-channel industrial data acquisition system supporting 4–20 mA current loop, RS485 MODBUS RTU, and CAN bus protocols with built-in safety features.",
        longDescription:
            "Alpha X is a versatile, multi-channel industrial data acquisition and monitoring system designed for seamless integration into any industrial setup. It supports 1, 3, or 6 channel configurations and communicates over 4–20 mA current loop, RS485 MODBUS RTU, and CAN bus protocols. With inbuilt short-circuit prevention (24V 500mA quick-blow fuse) and reverse voltage protection, Alpha X is built to withstand the rigours of industrial environments while delivering reliable, real-time data to your monitoring platform.",
        features: [
            "1 / 3 / 6 Channel Configurations",
            "4–20 mA, RS485 MODBUS RTU & CAN Bus",
            "24V DC Supply with Inbuilt Protection",
            "Plug-and-Play with Reflow Console",
        ],
        specs: {
            Model: "ALPHA X",
            Channels: "1 / 3 / 6",
            "Protocols Supported": "4–20 mA Current Loop, RS485 MODBUS RTU, CAN Bus",
            "Supply Voltage": "24 V DC",
            "Power Inputs": "1",
            "Power Outputs": "1 / 3 / 6 (24V DC)",
            "Supported 4–20 mA Devices": "1 / 3 / 6",
            "Measuring Range": "3 mA – 21 mA DC",
            "Power Consumption (excl. sensors)": "100 mA",
            "Operating Temperature": "5 ℃ – 80 ℃",
            "Casing Material": "PLA",
            "Short Circuit Prevention": "24V 500mA Quick Blow Fuse (Inbuilt)",
            "Reverse Voltage Protection": "Inbuilt at Input",
        },
        services: [
            {
                id: "console",
                title: "Console / Platform",
                description:
                    "Our platform is plug-and-play with Alpha X, providing real-time data for analysis, visualization, and decision-making. Built-in AI identifies trends and automatically adapts to different industrial use cases.",
                features: [
                    "Real-time system dashboard",
                    "AI-based trend analysis",
                    "Daily reports",
                    "Alarm alerts",
                    "Export data in Excel/CSV",
                    "Role-based access control",
                    "Simple and secure interface",
                    "Plug-and-play with Alpha X for real-time data and insights",
                ],
            },
            {
                id: "ai-audit",
                title: "AI Performance Audit",
                description:
                    "Comprehensive analysis of industrial data and systems to identify inefficiencies, reduce losses, and improve overall performance.",
                features: [
                    "Complete system and data assessment",
                    "Identification of losses and inefficiencies",
                    "AI-based performance insights",
                    "Process improvement recommendations",
                    "Detailed audit report with action points",
                ],
            },
            {
                id: "on-premise",
                title: "On-Premise Server Solution",
                description:
                    "Secure in-house server setup for data storage, monitoring, and controlled access within the facility.",
                features: [
                    "In-house server installation",
                    "Secure data storage within the facility",
                    "Local monitoring and access control",
                    "Custom configuration as per industry needs",
                    "Reliable and scalable setup",
                ],
            },
            {
                id: "next-gen-ai",
                title: "Next-Gen Industrial AI",
                description:
                    "Upcoming AI-driven tools for predictive insights, process optimization, and smarter industrial operations.",
                features: [
                    "ERP integration and AI-driven insights",
                    "EPC project monitoring and optimization",
                    "Stock and inventory intelligence",
                    "AI-based predictive analytics",
                    "Intelligent anomaly detection",
                    "Scalable AI-driven automation solutions (coming soon)",
                ],
                tag: "Coming Soon",
            },
        ],
        image: "/producsts/alpha2.jpeg",
        category: "hardware",
    },
];
