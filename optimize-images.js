import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["img/*.{jpg,png}"], {
    destination: "img",
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("Images optimized");
})();
