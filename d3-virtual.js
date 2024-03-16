export default function () {
  const virtualModuleId = "d3";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "check-d3-plugin", // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export * from "./d3"`;
      }
    },
  };
}
