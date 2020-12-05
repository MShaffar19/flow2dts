declare const $f2t_showMessage: (message: string, type: "load" | "refresh") => void;
declare const $f2t_hide: () => void;
export { $f2t_showMessage as showMessage, $f2t_hide as hide };
// @flow
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  showMessage: (message: string, type: "load" | "refresh") => void;
  hide: () => void;
};
export default $f2tExportDefault;