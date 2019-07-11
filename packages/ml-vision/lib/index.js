/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {
  createModuleNamespace,
  FirebaseModule,
  getFirebaseRoot,
} from '@react-native-firebase/app/lib/internal';
import {
  isString,
  isUndefined,
  toFilePath,
  validateOptionalNativeDependencyExists,
} from '@react-native-firebase/common';

import version from './version';
import VisionPoint from './VisionPoint';
import VisionRectangle from './VisionRectangle';
import VisionFaceDetectorOptions from './VisionFaceDetectorOptions';
import VisionImageLabelerOptions from './VisionImageLabelerOptions';
import VisionBarcodeDetectorOptions from './VisionBarcodeDetectorOptions';
import VisionCloudImageLabelerOptions from './VisionCloudImageLabelerOptions';
import VisionCloudTextRecognizerOptions from './VisionCloudTextRecognizerOptions';
import VisionCloudLandmarkRecognizerOptions from './VisionCloudLandmarkRecognizerOptions';
import VisionCloudDocumentTextRecognizerOptions from './VisionCloudDocumentTextRecognizerOptions';
import VisionCloudTextRecognizerModelType from './VisionCloudTextRecognizerModelType';
import VisionFaceDetectorClassificationMode from './VisionFaceDetectorClassificationMode';
import VisionFaceDetectorContourMode from './VisionFaceDetectorContourMode';
import VisionFaceDetectorLandmarkMode from './VisionFaceDetectorLandmarkMode';
import VisionFaceDetectorPerformanceMode from './VisionFaceDetectorPerformanceMode';

const statics = {
  VisionPoint,
  VisionRectangle,
  VisionFaceDetectorOptions,
  VisionImageLabelerOptions,
  VisionBarcodeDetectorOptions,
  VisionCloudImageLabelerOptions,
  VisionCloudTextRecognizerOptions,
  VisionCloudLandmarkRecognizerOptions,
  VisionCloudDocumentTextRecognizerOptions,
  VisionCloudTextRecognizerModelType,
  VisionFaceDetectorClassificationMode,
  VisionFaceDetectorContourMode,
  VisionFaceDetectorLandmarkMode,
  VisionFaceDetectorPerformanceMode,
};

const namespace = 'mlKitVision';
const nativeModuleName = [
  'RNFBMLVisionFaceDetectorModule',
  'RNFBMLVisionTextRecognizerModule',
  'RNFBMLVisionImageLabelerModule',
  'RNFBMLVisionBarcodeDetectorModule',
  'RNFBMLVisionLandmarkRecognizerModule',
];

class FirebaseMlKitVisionModule extends FirebaseModule {
  faceDetectorProcessImage(localImageFilePath, faceDetectorOptions) {
    validateOptionalNativeDependencyExists(
      'ml_vision_image_label_model',
      'ML Kit Vision Face Detector',
      !!this.native.imageLabelerProcessImage,
    );

    if (!isString(localImageFilePath)) {
      throw new Error(
        `firebase.mlKitVision().faceDetectorProcessImage(*) 'localImageFilePath' expected a string local file path.`,
      );
    }

    if (
      !isUndefined(faceDetectorOptions) &&
      !(faceDetectorOptions instanceof VisionFaceDetectorOptions)
    ) {
      throw new Error(
        `firebase.mlKitVision().faceDetectorProcessImage(_, *) 'faceDetectorOptions' expected an instance of VisionFaceDetectorOptions.`,
      );
    }

    return this.native.faceDetectorProcessImage(
      toFilePath(localImageFilePath),
      faceDetectorOptions ? faceDetectorOptions.toJSON() : {},
    );
  }

  textRecognizerProcessImage(localImageFilePath) {
    if (!isString(localImageFilePath)) {
      throw new Error(
        `firebase.mlKitVision().textRecognizerProcessImage(*) 'localImageFilePath' expected a string local file path.`,
      );
    }

    return this.native.textRecognizerProcessImage(localImageFilePath);
  }

  cloudTextRecognizerProcessImage(localImageFilePath, cloudTextRecognizerOptions) {
    if (!isString(localImageFilePath)) {
      throw new Error(
        `firebase.mlKitVision().cloudTextRecognizerProcessImage(*) 'localImageFilePath' expected a string local file path.`,
      );
    }

    // todo
  }

  cloudDocumentTextRecognizerProcessImage(localImageFilePath, cloudDocumentTextRecognizerOptions) {
    if (!isString(localImageFilePath)) {
      throw new Error(
        `firebase.mlKitVision().cloudDocumentTextRecognizerProcessImage(*) 'localImageFilePath' expected a string local file path.`,
      );
    }
    // todo
  }

  // cloud only
  cloudLandmarkRecognizerProcessImage(localImageFilePath, cloudLandmarkRecognizerOptions) {
    // todo
  }

  // image labeler
  imageLabelerProcessImage(localImageFilePath, imageLabelerOptions) {
    validateOptionalNativeDependencyExists(
      'ml_vision_image_label_model',
      'ML Kit Vision Image Labeler',
      !!this.native.imageLabelerProcessImage,
    );

    if (!isString(localImageFilePath)) {
      throw new Error(
        `firebase.mlKitVision().imageLabelerProcessImage(*) 'localImageFilePath' expected a string local file path.`,
      );
    }

    if (
      !isUndefined(imageLabelerOptions) &&
      !(imageLabelerOptions instanceof VisionImageLabelerOptions)
    ) {
      throw new Error(
        `firebase.mlKitVision().imageLabelerProcessImage(_, *) 'imageLabelerOptions' expected an instance of VisionImageLabelerOptions.`,
      );
    }

    return this.native.imageLabelerProcessImage(
      toFilePath(localImageFilePath),
      imageLabelerOptions ? imageLabelerOptions.toJSON() : {},
    );
  }

  cloudImageLabelerProcessImage(localImageFilePath, cloudImageLabelerOptions) {
    validateOptionalNativeDependencyExists(
      'ml_vision_image_label_model',
      'ML Kit Vision Image Labeler',
      !!this.native.imageLabelerProcessImage,
    );

    if (!isString(localImageFilePath)) {
      throw new Error(
        `firebase.mlKitVision().cloudImageLabelerProcessImage(*) 'localImageFilePath' expected a string local file path.`,
      );
    }

    if (
      !isUndefined(cloudImageLabelerOptions) &&
      !(cloudImageLabelerOptions instanceof VisionCloudImageLabelerOptions)
    ) {
      throw new Error(
        `firebase.mlKitVision().cloudImageLabelerProcessImage(_, *) 'cloudImageLabelerOptions' expected an instance of VisionCloudImageLabelerOptions.`,
      );
    }

    return this.native.cloudImageLabelerProcessImage(
      toFilePath(localImageFilePath),
      cloudImageLabelerOptions ? cloudImageLabelerOptions.toJSON() : {},
    );
  }

  barcodeDetectorProcessImage(localImageFilePath, barcodeDetectorOptions) {
    // todo
  }
}

// import { SDK_VERSION } from '@react-native-firebase/ml-vision';
export const SDK_VERSION = version;

// import mlKitVision from '@react-native-firebase/ml-vision';
// mlKitVision().X(...);
export default createModuleNamespace({
  statics,
  version,
  namespace,
  nativeModuleName,
  nativeEvents: false,
  hasMultiAppSupport: true,
  hasCustomUrlOrRegionSupport: false,
  ModuleClass: FirebaseMlKitVisionModule,
});

// import mlKitVision, { firebase } from '@react-native-firebase/ml-vision';
// mlKitVision().X(...);
// firebase.mlKitVision().X(...);
export const firebase = getFirebaseRoot();

// e.g.
// // import { VisionPoint } from '@react-native-firebase/ml-vision';
export VisionPoint from './VisionPoint';
export VisionRectangle from './VisionRectangle';
export VisionFaceDetectorOptions from './VisionFaceDetectorOptions';
export VisionImageLabelerOptions from './VisionImageLabelerOptions';
export VisionBarcodeDetectorOptions from './VisionBarcodeDetectorOptions';
export VisionCloudImageLabelerOptions from './VisionCloudImageLabelerOptions';
export VisionCloudTextRecognizerOptions from './VisionCloudTextRecognizerOptions';
export VisionCloudLandmarkRecognizerOptions from './VisionCloudLandmarkRecognizerOptions';
export VisionCloudDocumentTextRecognizerOptions from './VisionCloudDocumentTextRecognizerOptions';
export VisionCloudTextRecognizerModelType from './VisionCloudTextRecognizerModelType';
export VisionFaceDetectorClassificationMode from './VisionFaceDetectorClassificationMode';
export VisionFaceDetectorContourMode from './VisionFaceDetectorContourMode';
export VisionFaceDetectorLandmarkMode from './VisionFaceDetectorLandmarkMode';
export VisionFaceDetectorPerformanceMode from './VisionFaceDetectorPerformanceMode';
