import { AutomationResults, LoopStepType, User } from "@budibase/types"

export interface LoopInput {
  option: LoopStepType
  binding?: string[] | string | number[]
  iterations?: string
  failure?: any
}

export interface TriggerOutput {
  metadata?: any
  appId?: string
  timestamp?: number
}

export interface AutomationContext extends AutomationResults {
  steps: any[]
  stepsById: Record<string, any>
  stepsByName: Record<string, any>
  env?: Record<string, string>
  user?: User
  trigger: any
}
