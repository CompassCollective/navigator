/* -*- Mode: IDL; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * The origin of this IDL file is
 * https://www.w3.org/TR/webrtc-encoded-transform
 */

[Pref="media.peerconnection.enabled",
 Pref="media.peerconnection.scripttransform.enabled",
 Exposed=DedicatedWorker]
interface RTCRtpScriptTransformer {
    readonly attribute ReadableStream readable;
    readonly attribute WritableStream writable;
    [Throws] readonly attribute any options;
    Promise<unsigned long long> generateKeyFrame(optional DOMString rid);
    Promise<undefined> sendKeyFrameRequest();
};
