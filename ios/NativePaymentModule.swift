import Foundation

@objc(NativePayment)
class NativePayment: NSObject {

  @objc
  func initialize(_ config: [String: Any],
                  resolver resolve: RCTPromiseResolveBlock,
                  rejecter reject: RCTPromiseRejectBlock) {
      let merchantId = config["merchantId"] as? String ?? ""
      let env = config["environment"] as? String ?? "sandbox"
      resolve("NativePayment Initialized: \(merchantId)/\(env)")
  }

  @objc
  func startPayment(_ payment: [String: Any],
                    resolver resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock) {
      let result: [String: Any] = [
          "status": "SUCCESS",
          "transactionId": "txn_ios_demo_123"
      ]
      resolve(result)
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
      return false
  }
}
