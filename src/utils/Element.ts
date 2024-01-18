class Element {
  public element: WebdriverIO.Element;

  async get(locator: string) {
    const newElement = await $(locator);
    this.element = newElement;
    return this.element;
  }

  // TODO: Figure out what type to use
  // async getAll(locator: string) {
  //     const elementArray = await $$(locator);
  //     return this.element;
  // }
}

export default new Element();
