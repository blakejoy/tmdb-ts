import { Review } from './';

export interface ReviewDetails extends Review{
  iso_639_1: string;
  media_id: number;
  media_title: number;
  media_type: number;
}