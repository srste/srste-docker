const srsteeConstants = {
    request2Server2UpdateBundle: "UpdateBundle",
    syncConfigRequestHeader: "HEADER:accept-push-config\nBODY:",
    syncDataRequestHeader: "HEADER:accept-push-data\nBODY:",
    pushStatusHeader: "HEADER:push-status:",
    request2Client2SendFilesHeader: "client2send",
    syncCompletedResponseHeader: "completed",
    getAccessToken: "getAccessToken",
    authFailed: "authFailed",
    payloadSent: "payloadSent",
    payloadChunkSent: "payloadChunkSent",
    request2Server2SendFilesHeader: "server2send",
    request2Server2UpdateBundleMap: "UpdateBundleMap",
    baseURL: "http://localhost:8080",
    graphQLPath: "/graphql",
    Delimiter: ":~:~:",
    enableBundling: "EnableBundling",
    disableBundling: "DisableBundling",
    defaultSystemEmail: "system@srste.in", 
    defaultSystemPassword: "sitbpitw"
}
module.exports = srsteeConstants;
