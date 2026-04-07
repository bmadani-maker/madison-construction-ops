export type ProjectStatus = 'planned' | 'preconstruction' | 'active' | 'on_hold' | 'closeout' | 'complete';
export type ProcurementStatus =
  | 'not_started'
  | 'quoting'
  | 'approved'
  | 'ordered'
  | 'in_production'
  | 'shipped'
  | 'delivered'
  | 'installed'
  | 'delayed'
  | 'cancelled';

export type IssueSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface Project {
  id: string;
  name: string;
  address?: string;
  entityName?: string;
  status: ProjectStatus;
  phase?: string;
  priority?: string;
  startDate?: string;
  targetCompletionDate?: string;
  summary?: string;
  driveFolderUrl?: string;
}

export interface ProcurementItem {
  id: string;
  projectId: string;
  itemName: string;
  vendor?: string;
  procurementStatus: ProcurementStatus;
  expectedDeliveryDate?: string;
  riskFlag?: boolean;
}

export interface Issue {
  id: string;
  projectId: string;
  title: string;
  severity: IssueSeverity;
  status: string;
  waitingOnBarry?: boolean;
}
