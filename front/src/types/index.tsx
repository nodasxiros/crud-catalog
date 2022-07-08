export interface BeerDto {
  name: string
  type: string
  country: string
}
export interface Beer extends BeerDto {
  id: number
}
