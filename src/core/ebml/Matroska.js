// https://github.com/Matroska-Org/matroska-specification/blob/master/ebml_matroska.xml
const elements = module.exports = { EBMLMaxIDLength: { type: 'uinteger', id: [66, 242] },
  EBMLMaxSizeLength: { type: 'uinteger', id: [66, 243] },
  Segment:
 { type: 'master', id: [24, 83, 128, 103], unknownSize: true },
  SeekHead: { type: 'master', id: [17, 77, 155, 116] },
  Seek: { type: 'master', id: [77, 187] },
  SeekID: { type: 'binary', id: [83, 171] },
  SeekPosition: { type: 'uinteger', id: [83, 172] },
  Info: { type: 'master', id: [21, 73, 169, 102] },
  SegmentUID: { type: 'binary', id: [115, 164], size: 16 },
  SegmentFilename: { type: 'utf-8', id: [115, 132] },
  PrevUID: { type: 'binary', id: [60, 185, 35], size: 16 },
  PrevFilename: { type: 'utf-8', id: [60, 131, 171] },
  NextUID: { type: 'binary', id: [62, 185, 35], size: 16 },
  NextFilename: { type: 'utf-8', id: [62, 131, 187] },
  SegmentFamily: { type: 'binary', id: [68, 68], size: 16 },
  ChapterTranslate: { type: 'master', id: [105, 36] },
  ChapterTranslateEditionUID: { type: 'uinteger', id: [105, 252] },
  ChapterTranslateCodec: { type: 'uinteger', id: [105, 191] },
  ChapterTranslateID: { type: 'binary', id: [105, 165] },
  TimestampScale: { type: 'uinteger', id: [42, 215, 177] },
  Duration: { type: 'float', id: [68, 137] },
  DateUTC: { type: 'date', id: [68, 97] },
  Title: { type: 'utf-8', id: [123, 169] },
  MuxingApp: { type: 'utf-8', id: [77, 128] },
  WritingApp: { type: 'utf-8', id: [87, 65] },
  Cluster:
 { type: 'master', id: [31, 67, 182, 117], unknownSize: true },
  Timestamp: { type: 'uinteger', id: [231] },
  SilentTracks: { type: 'master', id: [88, 84] },
  SilentTrackNumber: { type: 'uinteger', id: [88, 215] },
  Position: { type: 'uinteger', id: [167] },
  PrevSize: { type: 'uinteger', id: [171] },
  SimpleBlock: { type: 'binary', id: [163] },
  BlockGroup: { type: 'master', id: [160] },
  Block: { type: 'binary', id: [161] },
  BlockVirtual: { type: 'binary', id: [162] },
  BlockAdditions: { type: 'master', id: [117, 161] },
  BlockMore: { type: 'master', id: [166] },
  BlockAddID: { type: 'uinteger', id: [238] },
  BlockAdditional: { type: 'binary', id: [165] },
  BlockDuration: { type: 'uinteger', id: [155] },
  ReferencePriority: { type: 'uinteger', id: [250] },
  ReferenceBlock: { type: 'integer', id: [251] },
  ReferenceVirtual: { type: 'integer', id: [253] },
  CodecState: { type: 'binary', id: [164] },
  DiscardPadding: { type: 'integer', id: [117, 162] },
  Slices: { type: 'master', id: [142] },
  TimeSlice: { type: 'master', id: [232] },
  LaceNumber: { type: 'uinteger', id: [204] },
  FrameNumber: { type: 'uinteger', id: [205] },
  BlockAdditionID: { type: 'uinteger', id: [203] },
  Delay: { type: 'uinteger', id: [206] },
  SliceDuration: { type: 'uinteger', id: [207] },
  ReferenceFrame: { type: 'master', id: [200] },
  ReferenceOffset: { type: 'uinteger', id: [201] },
  ReferenceTimestamp: { type: 'uinteger', id: [202] },
  EncryptedBlock: { type: 'binary', id: [175] },
  Tracks: { type: 'master', id: [22, 84, 174, 107] },
  TrackEntry: { type: 'master', id: [174] },
  TrackNumber: { type: 'uinteger', id: [215] },
  TrackUID: { type: 'uinteger', id: [115, 197] },
  TrackType: { type: 'uinteger', id: [131] },
  FlagEnabled: { type: 'uinteger', id: [185] },
  FlagDefault: { type: 'uinteger', id: [136] },
  FlagForced: { type: 'uinteger', id: [85, 170] },
  FlagLacing: { type: 'uinteger', id: [156] },
  MinCache: { type: 'uinteger', id: [109, 231] },
  MaxCache: { type: 'uinteger', id: [109, 248] },
  DefaultDuration: { type: 'uinteger', id: [35, 227, 131] },
  DefaultDecodedFieldDuration: { type: 'uinteger', id: [35, 78, 122] },
  TrackTimestampScale: { type: 'float', id: [35, 49, 79] },
  TrackOffset: { type: 'integer', id: [83, 127] },
  MaxBlockAdditionID: { type: 'uinteger', id: [85, 238] },
  Name: { type: 'utf-8', id: [83, 110] },
  Language: { type: 'string', id: [34, 181, 156] },
  LanguageIETF: { type: 'string', id: [34, 181, 157] },
  CodecID: { type: 'string', id: [134] },
  CodecPrivate: { type: 'binary', id: [99, 162] },
  CodecName: { type: 'utf-8', id: [37, 134, 136] },
  AttachmentLink: { type: 'uinteger', id: [116, 70] },
  CodecSettings: { type: 'utf-8', id: [58, 150, 151] },
  CodecInfoURL: { type: 'string', id: [59, 64, 64] },
  CodecDownloadURL: { type: 'string', id: [38, 178, 64] },
  CodecDecodeAll: { type: 'uinteger', id: [170] },
  TrackOverlay: { type: 'uinteger', id: [111, 171] },
  CodecDelay: { type: 'uinteger', id: [86, 170] },
  SeekPreRoll: { type: 'uinteger', id: [86, 187] },
  TrackTranslate: { type: 'master', id: [102, 36] },
  TrackTranslateEditionUID: { type: 'uinteger', id: [102, 252] },
  TrackTranslateCodec: { type: 'uinteger', id: [102, 191] },
  TrackTranslateTrackID: { type: 'binary', id: [102, 165] },
  Video: { type: 'master', id: [224] },
  FlagInterlaced: { type: 'uinteger', id: [154] },
  FieldOrder: { type: 'uinteger', id: [157] },
  StereoMode: { type: 'uinteger', id: [83, 184] },
  AlphaMode: { type: 'uinteger', id: [83, 192] },
  OldStereoMode: { type: 'uinteger', id: [83, 185] },
  PixelWidth: { type: 'uinteger', id: [176] },
  PixelHeight: { type: 'uinteger', id: [186] },
  PixelCropBottom: { type: 'uinteger', id: [84, 170] },
  PixelCropTop: { type: 'uinteger', id: [84, 187] },
  PixelCropLeft: { type: 'uinteger', id: [84, 204] },
  PixelCropRight: { type: 'uinteger', id: [84, 221] },
  DisplayWidth: { type: 'uinteger', id: [84, 176] },
  DisplayHeight: { type: 'uinteger', id: [84, 186] },
  DisplayUnit: { type: 'uinteger', id: [84, 178] },
  AspectRatioType: { type: 'uinteger', id: [84, 179] },
  ColourSpace: { type: 'binary', id: [46, 181, 36], size: 4 },
  GammaValue: { type: 'float', id: [47, 181, 35] },
  FrameRate: { type: 'float', id: [35, 131, 227] },
  Colour: { type: 'master', id: [85, 176] },
  MatrixCoefficients: { type: 'uinteger', id: [85, 177] },
  BitsPerChannel: { type: 'uinteger', id: [85, 178] },
  ChromaSubsamplingHorz: { type: 'uinteger', id: [85, 179] },
  ChromaSubsamplingVert: { type: 'uinteger', id: [85, 180] },
  CbSubsamplingHorz: { type: 'uinteger', id: [85, 181] },
  CbSubsamplingVert: { type: 'uinteger', id: [85, 182] },
  ChromaSitingHorz: { type: 'uinteger', id: [85, 183] },
  ChromaSitingVert: { type: 'uinteger', id: [85, 184] },
  Range: { type: 'uinteger', id: [85, 185] },
  TransferCharacteristics: { type: 'uinteger', id: [85, 186] },
  Primaries: { type: 'uinteger', id: [85, 187] },
  MaxCLL: { type: 'uinteger', id: [85, 188] },
  MaxFALL: { type: 'uinteger', id: [85, 189] },
  MasteringMetadata: { type: 'master', id: [85, 208] },
  PrimaryRChromaticityX: { type: 'float', id: [85, 209] },
  PrimaryRChromaticityY: { type: 'float', id: [85, 210] },
  PrimaryGChromaticityX: { type: 'float', id: [85, 211] },
  PrimaryGChromaticityY: { type: 'float', id: [85, 212] },
  PrimaryBChromaticityX: { type: 'float', id: [85, 213] },
  PrimaryBChromaticityY: { type: 'float', id: [85, 214] },
  WhitePointChromaticityX: { type: 'float', id: [85, 215] },
  WhitePointChromaticityY: { type: 'float', id: [85, 216] },
  LuminanceMax: { type: 'float', id: [85, 217] },
  LuminanceMin: { type: 'float', id: [85, 218] },
  Projection: { type: 'master', id: [118, 112] },
  ProjectionType: { type: 'uinteger', id: [118, 113] },
  ProjectionPrivate: { type: 'binary', id: [118, 114] },
  ProjectionPoseYaw: { type: 'float', id: [118, 115] },
  ProjectionPosePitch: { type: 'float', id: [118, 116] },
  ProjectionPoseRoll: { type: 'float', id: [118, 117] },
  Audio: { type: 'master', id: [225] },
  SamplingFrequency: { type: 'float', id: [181] },
  OutputSamplingFrequency: { type: 'float', id: [120, 181] },
  Channels: { type: 'uinteger', id: [159] },
  ChannelPositions: { type: 'binary', id: [125, 123] },
  BitDepth: { type: 'uinteger', id: [98, 100] },
  TrackOperation: { type: 'master', id: [226] },
  TrackCombinePlanes: { type: 'master', id: [227] },
  TrackPlane: { type: 'master', id: [228] },
  TrackPlaneUID: { type: 'uinteger', id: [229] },
  TrackPlaneType: { type: 'uinteger', id: [230] },
  TrackJoinBlocks: { type: 'master', id: [233] },
  TrackJoinUID: { type: 'uinteger', id: [237] },
  TrickTrackUID: { type: 'uinteger', id: [192] },
  TrickTrackSegmentUID: { type: 'binary', id: [193], size: 16 },
  TrickTrackFlag: { type: 'uinteger', id: [198] },
  TrickMasterTrackUID: { type: 'uinteger', id: [199] },
  TrickMasterTrackSegmentUID: { type: 'binary', id: [196], size: 16 },
  ContentEncodings: { type: 'master', id: [109, 128] },
  ContentEncoding: { type: 'master', id: [98, 64] },
  ContentEncodingOrder: { type: 'uinteger', id: [80, 49] },
  ContentEncodingScope: { type: 'uinteger', id: [80, 50] },
  ContentEncodingType: { type: 'uinteger', id: [80, 51] },
  ContentCompression: { type: 'master', id: [80, 52] },
  ContentCompAlgo: { type: 'uinteger', id: [66, 84] },
  ContentCompSettings: { type: 'binary', id: [66, 85] },
  ContentEncryption: { type: 'master', id: [80, 53] },
  ContentEncAlgo: { type: 'uinteger', id: [71, 225] },
  ContentEncKeyID: { type: 'binary', id: [71, 226] },
  ContentSignature: { type: 'binary', id: [71, 227] },
  ContentSigKeyID: { type: 'binary', id: [71, 228] },
  ContentSigAlgo: { type: 'uinteger', id: [71, 229] },
  ContentSigHashAlgo: { type: 'uinteger', id: [71, 230] },
  Cues: { type: 'master', id: [28, 83, 187, 107] },
  CuePoint: { type: 'master', id: [187] },
  CueTime: { type: 'uinteger', id: [179] },
  CueTrackPositions: { type: 'master', id: [183] },
  CueTrack: { type: 'uinteger', id: [247] },
  CueClusterPosition: { type: 'uinteger', id: [241] },
  CueRelativePosition: { type: 'uinteger', id: [240] },
  CueDuration: { type: 'uinteger', id: [178] },
  CueBlockNumber: { type: 'uinteger', id: [83, 120] },
  CueCodecState: { type: 'uinteger', id: [234] },
  CueReference: { type: 'master', id: [219] },
  CueRefTime: { type: 'uinteger', id: [150] },
  CueRefCluster: { type: 'uinteger', id: [151] },
  CueRefNumber: { type: 'uinteger', id: [83, 95] },
  CueRefCodecState: { type: 'uinteger', id: [235] },
  Attachments: { type: 'master', id: [25, 65, 164, 105] },
  AttachedFile: { type: 'master', id: [97, 167] },
  FileDescription: { type: 'utf-8', id: [70, 126] },
  FileName: { type: 'utf-8', id: [70, 110] },
  FileMimeType: { type: 'string', id: [70, 96] },
  FileData: { type: 'binary', id: [70, 92] },
  FileUID: { type: 'uinteger', id: [70, 174] },
  FileReferral: { type: 'binary', id: [70, 117] },
  FileUsedStartTime: { type: 'uinteger', id: [70, 97] },
  FileUsedEndTime: { type: 'uinteger', id: [70, 98] },
  Chapters: { type: 'master', id: [16, 67, 167, 112] },
  EditionEntry: { type: 'master', id: [69, 185] },
  EditionUID: { type: 'uinteger', id: [69, 188] },
  EditionFlagHidden: { type: 'uinteger', id: [69, 189] },
  EditionFlagDefault: { type: 'uinteger', id: [69, 219] },
  EditionFlagOrdered: { type: 'uinteger', id: [69, 221] },
  ChapterAtom: { type: 'master', id: [182] },
  ChapterUID: { type: 'uinteger', id: [115, 196] },
  ChapterStringUID: { type: 'utf-8', id: [86, 84] },
  ChapterTimeStart: { type: 'uinteger', id: [145] },
  ChapterTimeEnd: { type: 'uinteger', id: [146] },
  ChapterFlagHidden: { type: 'uinteger', id: [152] },
  ChapterFlagEnabled: { type: 'uinteger', id: [69, 152] },
  ChapterSegmentUID: { type: 'binary', id: [110, 103], size: 16 },
  ChapterSegmentEditionUID: { type: 'uinteger', id: [110, 188] },
  ChapterPhysicalEquiv: { type: 'uinteger', id: [99, 195] },
  ChapterTrack: { type: 'master', id: [143] },
  ChapterTrackNumber: { type: 'uinteger', id: [137] },
  ChapterDisplay: { type: 'master', id: [128] },
  ChapString: { type: 'utf-8', id: [133] },
  ChapLanguage: { type: 'string', id: [67, 124] },
  ChapLanguageIETF: { type: 'string', id: [67, 125] },
  ChapCountry: { type: 'string', id: [67, 126] },
  ChapProcess: { type: 'master', id: [105, 68] },
  ChapProcessCodecID: { type: 'uinteger', id: [105, 85] },
  ChapProcessPrivate: { type: 'binary', id: [69, 13] },
  ChapProcessCommand: { type: 'master', id: [105, 17] },
  ChapProcessTime: { type: 'uinteger', id: [105, 34] },
  ChapProcessData: { type: 'binary', id: [105, 51] },
  Tags: { type: 'master', id: [18, 84, 195, 103] },
  Tag: { type: 'master', id: [115, 115] },
  Targets: { type: 'master', id: [99, 192] },
  TargetTypeValue: { type: 'uinteger', id: [104, 202] },
  TargetType: { type: 'string', id: [99, 202] },
  TagTrackUID: { type: 'uinteger', id: [99, 197] },
  TagEditionUID: { type: 'uinteger', id: [99, 201] },
  TagChapterUID: { type: 'uinteger', id: [99, 196] },
  TagAttachmentUID: { type: 'uinteger', id: [99, 198] },
  SimpleTag: { type: 'master', id: [103, 200] },
  TagName: { type: 'utf-8', id: [69, 163] },
  TagLanguage: { type: 'string', id: [68, 122] },
  TagLanguageIETF: { type: 'string', id: [68, 123] },
  TagDefault: { type: 'uinteger', id: [68, 132] },
  TagString: { type: 'utf-8', id: [68, 135] },
  TagBinary: { type: 'binary', id: [68, 133] } };

for (const n in elements) elements[n].id = Buffer.from(elements[n].id);
