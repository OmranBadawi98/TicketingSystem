export interface TicketModel {
  id: number;
  issue: string;
  from: string;
  to: string;
  description: string;
  done: boolean; //if true "Done" Else "In Progress"
}
export const Columns: string[] = [
  'id',
  'issue',
  'from',
  'to',
  'edit',
  'done',
  'status',
];
