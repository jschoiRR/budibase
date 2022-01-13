import DataFetch from "./DataFetch.js"

export default class NestedProviderFetch extends DataFetch {
  static async getDefinition(datasource) {
    // Nested providers should already have exposed their own schema
    return {
      schema: datasource?.value?.schema,
    }
  }

  async getData() {
    const { datasource } = this.options
    // Pull the rows from the existing data provider
    return {
      rows: datasource?.value?.rows || [],
      hasNextPage: false,
      cursor: null,
    }
  }
}
