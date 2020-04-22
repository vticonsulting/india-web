<template>
  <div class="my-4 mx-16 max-w-3xl mx-auto px-6 font-body">
      <div class="media-container container mx-auto max-w-4xl" style="position: relative; height: 800px">
        <iframe
          style="top: 0;left: 0;width: 100%;height: 100%;border: 0;"
          src="/syllabus-2019.pdf"
          width="100%"
          height="100%"
        >
          This browser does not support PDFs. Please download the PDF to view it: Download PDF
        </iframe>
      </div>
  </div>
</template>



<style>
* {
  margin: 0;
  padding: 0;
}
.media-container {
  position: relative;
  overflow: hidden;
  padding-top: 26.25%;
}

.media-container iframe,
.media-container video,
.media-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
