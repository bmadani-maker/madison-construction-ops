import type { Issue, ProcurementItem, Project } from './types';

export const projects: Project[] = [
  {
    id: 'p1',
    name: '351 53rd St SE',
    address: '351 53rd St SE, Washington, DC',
    entityName: 'Madison Investments',
    status: 'active',
    phase: 'inspections',
    priority: 'high',
    summary: 'NOI abatement and compliance follow-up active.',
  },
  {
    id: 'p2',
    name: '2800 Jasper Rd SE',
    address: '2800 Jasper Rd SE, Washington, DC',
    entityName: 'Madison Investments',
    status: 'active',
    phase: 'construction',
    priority: 'medium',
    summary: 'Active project with inspection follow-up risk.',
  },
  {
    id: 'p3',
    name: '5216 D St SE',
    address: '5216 D St SE, Washington, DC',
    entityName: 'Madison Investments',
    status: 'active',
    phase: 'inspections',
    priority: 'high',
    summary: 'Multiple open violation reminders require grouped resolution.',
  },
];

export const procurementItems: ProcurementItem[] = [
  {
    id: 'pr1',
    projectId: 'p2',
    itemName: 'Electrical panel package',
    vendor: 'ABC Electric',
    procurementStatus: 'ordered',
    expectedDeliveryDate: '2026-04-20',
    riskFlag: false,
  },
  {
    id: 'pr2',
    projectId: 'p3',
    itemName: 'Window replacement package',
    vendor: 'Capital Windows',
    procurementStatus: 'delayed',
    expectedDeliveryDate: '2026-04-18',
    riskFlag: true,
  },
];

export const issues: Issue[] = [
  {
    id: 'i1',
    projectId: 'p1',
    title: '26NOIR-INS-04301 follow-up inspection due',
    severity: 'critical',
    status: 'open',
    waitingOnBarry: false,
  },
  {
    id: 'i2',
    projectId: 'p3',
    title: 'Four open violation reminders need consolidated action plan',
    severity: 'high',
    status: 'open',
    waitingOnBarry: true,
  },
];
