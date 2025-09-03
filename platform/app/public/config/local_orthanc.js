/** @type {AppTypes.Config} */
window.config = {
  routerBasename: null,
  extensions: [],
  modes: [],
  showStudyList: true,
  maxNumberOfWebWorkers: 3,
  showLoadingIndicator: true,
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  strictZSpacingForVolumeViewport: true,
  // filterQueryParam: false,
  defaultDataSourceName: 'orthanc',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'orthanc',
      configuration: {
        friendlyName: 'local Orthanc DICOMWeb Server',
        wadoUriRoot: 'http://localhost:8080/dicom-web',
        qidoRoot: 'http://localhost:8080/dicom-web',
        wadoRoot: 'http://localhost:8080/dicom-web',
        qidoSupportsIncludeField: true,
        dicomUploadEnabled: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
      },
    },
  ],
  httpErrorHandler: error => {
    // This is 429 when rejected from the public idc sandbox too often.
    console.warn(error.status);

    // Could use services manager here to bring up a dialog/modal if needed.
    console.warn('test, navigate to https://ohif.org/');
  },
};
