export type resultProps = {
  status: "normal" | "stunting" | "tinggi" | "severely stunting";
  rekomendasi: string[];
};

export function Result({ status, rekomendasi }: resultProps) {
  const color = {
    normal: "#0FB200",
    stunting: "#40c0f3",
    tinggi: "#d88e47",
    "severely stunting": "#ff5355",
  };

  console.log({ status, rekomendasi });

  const transparentColor: any = (hexColor: string, opacity = 0.2) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const colorHex = color[status] ?? "#000000";

  return (
    <div
      className="w-full md:w-[1056px] mx-auto border rounded-md bg-white"
      style={{ borderColor: colorHex }}
    >
      <section
        className="w-full md:h-[124px] rounded-t-md p-4 flex justify-between"
        style={{ backgroundColor: transparentColor(colorHex, 0.2) }}
      >
        <div>
          <h3 className="text-2xl font-semibold mb-2">Hasil Analisa</h3>
          <p className="text-xs text-gray-700 mb-4">
            Status gizi anak dalam kategori <strong>{status}</strong>.
            Pertahankan pola makan sehat.
          </p>
        </div>
        <p
          className="text-sm font-medium rounded-2xl px-4 py-1 self-start"
          style={{
            backgroundColor: transparentColor(colorHex, 0.2),
            color: colorHex,
          }}
        >
          {status}
        </p>
      </section>

      <section className="w-full bg-white px-4 py-6 space-y-6">
        <div>
          <p className="text-xs font-semibold mb-2">Rekomendasi</p>
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-1">
            {rekomendasi.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="bg-[#e4edff] text-[#00078F] w-full px-4 py-3 rounded-md text-xs">
          Catatan: Hasil analisis ini hanya perkiraan dan tidak menggantikan
          diagnosis medis profesional. Silakan konsultasikan dengan dokter atau
          ahli gizi untuk evaluasi lebih lanjut.
        </p>
      </section>
    </div>
  );
}
