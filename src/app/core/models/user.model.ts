export interface TeamMember {
  id: string;
  name: {
    first_name: string;
    last_name: string;
    handle: string;
  };
  status: 'Customer' | 'Churned';
  email: string;
  role: string;
  license_used: number;
  teams: {
    text_color: string;
    background_color: string;
    value: string;
  }[];
}

export interface GridColumn {
  column_key: string;
  column_name: string;
  type: string;
  align: 'left' | 'right' | 'center';
}

export interface ApiResponse {
  grid_columns: GridColumn[];
  grid_data: TeamMember[];
}
