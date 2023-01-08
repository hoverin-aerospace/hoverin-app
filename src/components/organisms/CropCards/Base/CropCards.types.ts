export interface CropCardProps {
  field: FieldData;
}
export interface FieldData {
  id: string;
  fieldName: string;
  location: string;
  temperature: string;
  wind: string;
  humidity: string;
  upcomingActivity: string;
}
