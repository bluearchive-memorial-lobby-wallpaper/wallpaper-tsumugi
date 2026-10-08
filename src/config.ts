import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-tsumugi",
  slug: "tsumugi",
  title: "Tsumugi",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 18.33333396911621,
    "lines": [
      {
        "id": "ch0252_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "誰の心にだって、\n闇は存在するもの。",
          "ko": "누구나 마음 어딘가엔,\n어둠이 존재하는 법.",
          "en": ""
        }
      },
      {
        "id": "ch0252_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "それぞれ悩みを抱え、\n迷い――道を歩んでいる。",
          "ko": "저마다 고민을 껴안고,\n방황하며……\n길을 걸어가고 있죠.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 14.666666984558105,
    "lines": [
      {
        "id": "ch0252_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "――私も、そうです。",
          "ko": "……저도, 그래요.",
          "en": ""
        }
      },
      {
        "id": "ch0252_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "この道で良いのか、と。\n悩む時もあります。",
          "ko": "이 길이 맞을까 하고,\n고민할 때도 있답니다.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 18.83333396911621,
    "lines": [
      {
        "id": "ch0252_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "そんな私に、\n先生は言ってくれましたよね。",
          "ko": "그런 저에게, 선생님께서\n말씀해 주셨어요.",
          "en": ""
        }
      },
      {
        "id": "ch0252_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "私が自由に――後悔のない日々を\n過ごせるよう、支える、と。",
          "ko": "제가 자유로이,\n후회 없는 나날을\n보낼 수 있게 돕겠다고.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 13.666666984558105,
    "lines": [
      {
        "id": "ch0252_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "ですから、先生は……。",
          "ko": "그러니까, 선생님은…….",
          "en": ""
        }
      },
      {
        "id": "ch0252_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "――「私の闇を照らす光」\nだったのです。",
          "ko": "'저의 어둠을 밝히는 빛'\n이었던 거예요.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 17.666667938232422,
    "lines": [
      {
        "id": "ch0252_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "私の光であるあなたへ、\nこの曲を捧げましょう。",
          "ko": "저의 빛이 되어준 당신에게,\n이 곡을 바칩니다.",
          "en": ""
        }
      },
      {
        "id": "ch0252_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "感謝を込めた、旋律を……\n聞いてください。",
          "ko": "감사를 담은 선율을……\n들어주세요.",
          "en": ""
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
