export type CategoryBased = {
  uuid: string
  category_name: string
  is_active: boolean
}

export type Categorys = Array<CategoryBased>
export type Category = CategoryBased
