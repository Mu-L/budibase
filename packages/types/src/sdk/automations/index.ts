import { Automation, AutomationMetadata, Row, User } from "../../documents"
import { Job } from "bull"

export interface AutomationDataEvent {
  appId?: string
  metadata?: AutomationMetadata
  automation?: Automation
  timeout?: number
  row?: Row
  oldRow?: Row
  user?: User
}

export interface AutomationData {
  event: AutomationDataEvent
  automation: Automation
}

export interface AutomationRowEvent {
  appId: string
  row: Row
  oldRow: Row
}

export type AutomationJob = Job<AutomationData>
