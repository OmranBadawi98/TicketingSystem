export interface TicketModel {
  id: number;
  issue: string;
  from: string;
  to: string;
  description: string;
  done: boolean;
  status: string;
}
export const Columns: string[] = [
  'id',
  'issue',
  'from',
  'to',
  // 'recived',
  // 'wrecived',
  'edit',
  'done',
  'status',
];
