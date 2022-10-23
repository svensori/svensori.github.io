import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["img/projects/*.{jpg,png}"], {
    destination: "img/projects",
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("Images optimized");
})();
