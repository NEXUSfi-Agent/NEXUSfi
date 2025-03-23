# NEXUSfi

<div align="center">
  <img src="https://raw.githubusercontent.com/NEXUSfi-Agent/NEXUSfi/main/public/logo.svg" alt="NEXUSfi Logo" width="300">
</div>

## AI-Driven Cryptocurrency Investment Protocol Built on Solana

NEXUSfi is an AI-driven investment protocol built on Solana, designed to democratize crypto asset management. By leveraging advanced machine learning algorithms and the high-performance Solana blockchain, NEXUSfi provides institutional-grade investment strategies to everyday investors while maintaining full decentralization, transparency, and user autonomy.

## Table of Contents

- [Vision](#vision)
- [Product Suite](#product-suite)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Implementation Logic](#implementation-logic)
- [Data Flow](#data-flow)
- [Key Components](#key-components)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contact Us](#contact-us)
- [License](#license)
- [Developer Notes](#developer-notes)
- [Development Progress](#development-progress)

### Vision

To transform cryptocurrency investment by connecting sophisticated quantitative strategies with everyday users, creating a more efficient, accessible, and equitable financial ecosystem through ready-to-use products.

### Product Suite

- **NEXUSfi Core Platform**: Web application featuring dashboard, strategy marketplace, and performance tracking
- **NEXUSfi Strategy Vaults**: Ready-to-use investment containers with specific objectives
- **NEXUSfi Mobile App**: Native iOS and Android applications for mobile portfolio management
- **NEXUSfi API Suite**: Programmatic access to NEXUSfi's intelligence and execution capabilities

### Key Features

- **AI-Driven Strategy Selection**: Machine learning algorithms that match users with optimal investment strategies
- **Automated Portfolio Management**: Continuous monitoring and rebalancing to maintain optimal performance
- **Risk Assessment Tools**: Personalized risk analysis with adjustable parameters
- **Real-Time Analytics**: Comprehensive performance metrics and market insights
- **Strategy Marketplace**: Multiple investment strategies catering to different risk preferences

### Tech Stack

- **Frontend**: 
  - React 18+ (Functional components with hooks)
  - TypeScript for type safety
  - Next.js 13+ (App Router) for server-side rendering and routing
  - TailwindCSS for styling
  
- **Blockchain**: 
  - Solana (Rust programs)
  - Anchor framework for Solana program development
  
- **AI Layer**: 
  - Python backend services
  - TensorFlow for machine learning models
  - PyTorch for deep learning
  
- **Data Infrastructure**: 
  - Apache Airflow for workflow orchestration
  - Kubernetes for containerization and scaling
  - PostgreSQL for relational data storage

## Project Architecture

NEXUSfi follows a modern architecture pattern with clear separation of concerns between frontend, backend, and blockchain integration layers.

<div align="center">
  <p><em>Architecture Diagram - View high-resolution image for details</em></p>
  <img src="public/images/architecture.txt" alt="NEXUSfi Architecture Diagram" width="800">
</div>

### Frontend Layer
- Built with Next.js App Router for server-side rendering
- Component-based architecture using React
- Type-safe development with TypeScript
- Responsive design with TailwindCSS utility classes

### Middleware Layer
- RESTful API services for data exchange
- AI models for strategy recommendations
- Authentication and security services

### Blockchain Layer
- Solana smart contracts for on-chain operations
- Integration with decentralized finance protocols
- Secure wallet interactions

### Data Layer
- Efficient data processing pipelines
- Real-time analytics and reporting
- Secure storage for user and strategy data

## Implementation Logic

The NEXUSfi platform implements several key architectural patterns to ensure a robust, maintainable, and scalable application.

<div align="center">
  <p><em>Implementation Flow Diagram - View high-resolution image for details</em></p>
  <img src="public/images/implementation-flow.txt" alt="NEXUSfi Implementation Flow" width="800">
</div>

### Strategy Management Flow

The strategy management process utilizes a sophisticated pipeline that combines user preferences, market data, and risk assessment to select the optimal investment strategies. Once strategies are selected, portfolios are constructed and continuously optimized through automated rebalancing based on market conditions.

### Application Architecture

NEXUSfi implements a modular architecture with the following key design patterns:

1. **Component-Based Design**: UI elements are built as reusable React components
2. **Hooks Pattern**: Custom React hooks for shared logic and state management
3. **Repository Pattern**: Data access is abstracted behind repository interfaces
4. **Service Layer**: Business logic is isolated in dedicated service modules
5. **Strategy Pattern**: Different investment strategies can be selected and executed dynamically

## Data Flow

The application follows a unidirectional data flow pattern to ensure predictable state management and UI rendering.

<div align="center">
  <p><em>Data Flow Diagram - View high-resolution image for details</em></p>
  <img src="public/images/data-flow.txt" alt="NEXUSfi Data Flow" width="800">
</div>

### User Interaction Flow

1. User interactions trigger state changes or data requests
2. State management (using React hooks) processes the changes
3. Business logic executes necessary operations
4. UI components re-render based on the updated state
5. Changes are persisted as needed (local storage, API, blockchain)

### Strategy Data Flow

The strategy implementation follows a specific data flow pattern:

1. User selects a strategy from the marketplace
2. Strategy details are fetched from the data service
3. Risk profile assessment is performed based on user preferences
4. Portfolio simulation shows expected outcomes
5. Upon confirmation, investment execution is processed
6. Continuous performance monitoring triggers rebalancing as needed

## Key Components

### Strategy Detail Page

The Strategy Detail page provides comprehensive information about each investment strategy offered in the NEXUSfi platform:

```typescript
// Key component for displaying strategy details
export default function StrategyDetailPage() {
  const params = useParams() as Params;
  const strategyId = params.id;
  const strategy = getStrategyById(strategyId);
  
  const [selectedTab, setSelectedTab] = React.useState<'overview' | 'performance' | 'allocation'>('overview');

  // Component checks if strategy exists and renders appropriate content
  if (!strategy) {
    return <StrategyNotFound strategyId={strategyId} />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 bg-gray-50 py-8">
        {/* Strategy header information */}
        <StrategyHeader strategy={strategy} />
        
        {/* Tab navigation for different sections */}
        <StrategyTabs 
          selectedTab={selectedTab} 
          onTabChange={setSelectedTab} 
        />
        
        {/* Tab content based on selection */}
        <StrategyTabContent 
          strategy={strategy} 
          selectedTab={selectedTab} 
        />
        
        {/* Related strategies suggestions */}
        <RelatedStrategies currentStrategy={strategy} />
      </main>
      <Footer />
    </div>
  );
}
```

### Data Models

The project uses TypeScript interfaces to define all data models, ensuring type safety across the application:

```typescript
// Core Strategy Model
export interface Strategy {
  id: string;
  name: string;
  description: string;
  risk: RiskProfile;
  apy: number;
  tvl?: number;
  rebalancing: RebalancingFrequency;
  platformFee?: number;
  minimumInvestment: number;
  supportedTokens: string[];
  tokens?: string[];
  assetAllocation?: Record<string, number>;
  performance?: Array<{
    period: string;
    value: number;
  }>;
  monthlyPerformance?: Array<{
    date: string;
    return: number;
  }>;
  createdAt: string;
  lastUpdated: string;
}

// Extended Strategy Model
interface ExtendedStrategy extends Strategy {
  longDescription?: string;
  performanceFee?: number;
  allocation?: Array<{
    protocol: string;
    percentage: number;
    apy: number;
  }>;
}
```

### Mock Data Services

During development, the application uses mock data services to simulate API interactions:

```typescript
// Helper function: Get strategy by ID
export function getStrategyById(id: string): Strategy | undefined {
  return strategies.find(strategy => strategy.id === id);
}

// Function to get all strategies
export function getAllStrategies(): Strategy[] {
  return strategies;
}
```

## Quick Start

### Prerequisites

- Node.js 18+
- Package manager (npm or yarn)
- Solana CLI tools (for development)
- Phantom wallet or other Solana wallet

### Installation

```bash
# Clone the repository
git clone https://github.com/NEXUSfi-Agent/NEXUSfi.git
cd NEXUSfi

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the application.

## Project Structure

```
NEXUSfi/
├── app/                # Next.js pages
│   ├── analytics/      # Analytics pages
│   ├── dashboard/      # Dashboard pages
│   ├── strategies/     # Strategy pages
│   │   ├── page.tsx    # Strategy listing page
│   │   └── [id]/       # Dynamic strategy detail routes
│   │       └── page.tsx # Individual strategy page
│   │
│   └── staking/        # Staking pages
├── components/         # React components
│   ├── layout/         # Layout components
│   │   ├── MainNav.tsx # Main navigation bar
│   │   └── Footer.tsx  # Footer component
│   ├── ui/             # UI components
│   │   ├── Button.tsx  # Reusable button component
│   │   └── Card.tsx    # Card component for content display
│   ├── dashboard/      # Dashboard components
│   └── strategy/       # Strategy components
├── lib/                # Utility functions and services
│   ├── utils.ts        # General utility functions
│   ├── data.ts         # Mock data services
│   └── wallet.ts       # Wallet interaction functions
├── public/             # Static assets
│   ├── logo.svg        # Main logo SVG
│   └── images/         # Image assets
├── types/              # TypeScript type definitions
│   ├── index.ts        # Main type definitions
│   └── react.d.ts      # React type extensions
└── next.config.js      # Next.js configuration
```

## Roadmap

- Phase 1: Foundation Building (Completed)
- Phase 2: Feature Development (In Progress)
- Phase 3: Testnet Release (Q4 2025)
- Phase 4: Mainnet Launch (Q1-Q2 2026)
- Phase 5: Ecosystem Expansion (Q3 2026 and beyond)

## Contact Us

- Website: [nexusfix.xyz](https://nexusfix.xyz)
- Twitter: [@NEXUSfi_](https://x.com/NEXUSfi_)
- GitHub: [NEXUSfi-Agent](https://github.com/NEXUSfi-Agent)
- Email: info@nexusfi.xyz

## License

MIT License

## Developer Notes

To convert the SVG logo to PNG for use in other contexts, open the `public/svg_to_png.html` file in a browser, click "Convert to PNG", and then "Download PNG".

### Diagram Viewer

The project includes diagram specifications for architecture, data flow, and implementation flow. To view these diagram specifications:

1. Run the development server using `npm run dev` or `yarn dev`
2. Navigate to `/diagram_viewer.html` in your browser
3. Use the buttons to load and view each diagram's specifications
4. The actual diagrams should be created by a designer using these specifications before project release

## Development Progress

### Completed Tasks

- **Project Internationalization**: Converted all user-facing content from Chinese to English for global accessibility.
- **Logo Implementation**: Added project logo and created tools for SVG to PNG conversion.
- **Strategy Detail Page**: Implemented the strategy detail page with comprehensive information display.
- **Data Structure Improvements**: Enhanced mock data structures with proper typing and complete sample data.
- **Documentation Updates**: Improved README with clear project description, installation instructions, and structure.
- **Architecture Documentation**: Created detailed specifications for system architecture, data flow, and implementation flow diagrams.
- **Diagram Viewer Tool**: Developed a browser-based tool for viewing diagram specifications before professional design implementation.

### Upcoming Tasks

- Implement wallet connection functionality
- Create strategy comparison feature
- Add performance charts and visualizations
- Develop portfolio management dashboard
- Integrate with Solana blockchain for real-time data 