import { Node } from "@allanoricil/nrg-nodes";

export default class Node5 extends Node {
  constructor(config) {
    super(config);
    this.log(`constructed type: ${Node5.type} id: ${this.id}`);

    this.test = config.test;
  }

  // NOTE: example showing how to use context
  onInput(msg, send, done) {
    const contextRandomValue = this.context().get("random-values") || [];
    contextRandomValue.push(Math.random());
    this.context().set("random-values", contextRandomValue);

    const flowContextRandomValues = this.flowContext.get("random-values") || [];
    flowContextRandomValues.push(Math.random());
    this.flowContext.set("random-values", flowContextRandomValues);

    const globalContextRandomValues =
      this.globalContext.get("random-values") || [];
    globalContextRandomValues.push(Math.random());
    this.globalContext.set("random-values", globalContextRandomValues);

    done();
  }
}
