/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
#ifndef _include_ipc_glue_UtilityProcessSandboxing_h_
#define _include_ipc_glue_UtilityProcessSandboxing_h_

#include <stdint.h>

namespace mozilla {

namespace ipc {

// When adding a new value, the checks within UtilityProcessImpl::Init() needs
// to be updated as well.
enum SandboxingKind : uint64_t {

  GENERIC_UTILITY,

#ifdef MOZ_APPLEMEDIA
  UTILITY_AUDIO_DECODING_APPLE_MEDIA,
#endif
#ifdef XP_WIN
  UTILITY_AUDIO_DECODING_WMF,
#endif
#ifdef MOZ_WMF_MEDIA_ENGINE
  MF_MEDIA_ENGINE_CDM,
#endif
#ifdef XP_WIN
  WINDOWS_UTILS,
#endif

  COUNT,

};

bool IsUtilitySandboxEnabled(const char* envVar, SandboxingKind aKind);
bool IsUtilitySandboxEnabled(SandboxingKind aKind);

}  // namespace ipc

}  // namespace mozilla

#endif  // _include_ipc_glue_UtilityProcessSandboxing_h_
