"use client";

import { Camera } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";

declare global {
  var cloudinary: any;
}

const uploadPreset = "usjfvtlx";

interface ImageUploadProps {
  onChange: (value: string | string[]) => void;
  value: string | string[];
  type: "single" | "multi";
  variant: "video" | "image";
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  type,
  variant,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      if (type === "multi") {
        // For multi, update the state with an array of image URLs
        const newImages = Array.isArray(value)
          ? [...value, result.info.secure_url]
          : [result.info.secure_url];
        onChange(newImages);
      } else {
        // For single, update the state with a single image URL
        onChange(result.info.secure_url);
      }
    },
    [onChange, type, value]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: type === "single" ? 1 : 7,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2
              rounded-lg 
              p-5 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
              w-full
            "
          >
            {/* display video  */}
            {value && variant === "video" && (
              <video className="aspect-video" controls>
                <source
                  src={typeof value === "string" ? value : value[0]}
                  type="video/mp4"
                />
              </video>
            )}

            {variant === "image" && value && type === "single" && (
              <div className="inset-0 w-full h-[600px]">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={typeof value === "string" ? value : value[0]}
                  alt="House"
                />
              </div>
            )}

            {variant === "image" && value && type === "multi" && (
              <div className="inset-0 w-full overflow-hidden">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2 p-2">
                  {(value as string[]).map((imageUrl, index) => (
                    <div
                      key={imageUrl}
                      className="relative overflow-hidden rounded-md h-[200px] w-[200px]"
                    >
                      <Image
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        fill
                        style={{ objectFit: "contain" }}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* upload logo */}
            <div
              className="border border-dashed  p-5  flex
              flex-col
              justify-center
              items-center w-full rounded-xl"
            >
              <Camera size={50} />
              <div className="font-semibold text-lg">
                {type === "multi" && value.length > 1
                  ? "Upload more"
                  : "Click to upload"}
              </div>
            </div>
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
