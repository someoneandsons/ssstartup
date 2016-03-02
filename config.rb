require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "_styles"
images_dir = "img"
javascripts_dir = "js"
fonts_dir = "font"

output_style = :compact

relative_assets = true

line_comments = false
color_output = false

preferred_syntax = :scss

require 'sass'
require 'cgi'

module Sass::Script::Functions

  def inline_svg_image(path)
    real_path = File.join(Compass.configuration.images_path, path.value)
    svg = data(real_path)
    encoded_svg = CGI::escape(svg).gsub('+', '%20')
    data_url = "url('data:image/svg+xml;charset=utf-8," + encoded_svg + "')"
    Sass::Script::String.new(data_url)
  end

private

  def data(real_path)
    if File.readable?(real_path)
      File.open(real_path, "rb") {|io| io.read}
    else
      raise Compass::Error, "File not found or cannot be read: #{real_path}"
    end
  end

end