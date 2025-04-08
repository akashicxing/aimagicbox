declare module '@/components/Header' {
  import { FC } from 'react'
  const Header: FC
  export default Header
}

declare module '@/components/Hero' {
  import { FC } from 'react'
  const Hero: FC
  export default Hero
}

declare module '@/components/Features' {
  import { FC } from 'react'
  const Features: FC
  export default Features
}

declare module '@/components/ToolsGrid' {
  import { FC } from 'react'
  import { Tool } from '@/types'
  
  interface ToolsGridProps {
    tools: Tool[]
  }
  
  const ToolsGrid: FC<ToolsGridProps>
  export default ToolsGrid
} 