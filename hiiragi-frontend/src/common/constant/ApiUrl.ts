/**
 * APIURL定数クラス
 * @author lafleurblanche
 */
export const ApiUrl = {
  HiiragiRW01: "http://localhost:45001/hiiragirw01",
};

export const valueOfApiUrl = <O extends object, K extends keyof O>(
  o:O,
  k: K
): O[K] => {
  return o[k];
};
