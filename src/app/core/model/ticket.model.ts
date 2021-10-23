export interface TicketModel {
  id: number;
  issue: string;
  from: string;
  to: string;
  description: string;
  done: boolean; //if true "Done" Else "In Progress"
  // status: boolean;
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
