class CategoryModel {
  constructor(id, name, url, subCategories) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.subCategories = subCategories || []; // Default to an empty array if subCategories is not provided
  }
}

export default CategoryModel;
