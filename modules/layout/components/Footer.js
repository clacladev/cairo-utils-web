export default function Footer() {
  return (
    <div id="footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 text-sm text-gray-600">
        <span className="block font-bold">Disclaimer</span>
        <span className="block">
          Use this website/project at your own peril and risk. The project comes with no guarantees of any kind. Do not keep me accountable.
        </span>

        <span className="block font-bold pt-3">Acknowledgments</span>
        <span className="block">
          Thanks to <a href="https://github.com/sekai-studio/starknet-libs">sekai-studio/starknet-libs</a> for their cairo_string library.
        </span>
    </div>
  )
}
