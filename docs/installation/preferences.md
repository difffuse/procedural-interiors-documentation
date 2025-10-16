---
sidebar_position: 2
---

# Preference Settings

Configure Procedural Interiors to match your workflow and system capabilities.

## Accessing Preferences

1. Open Blender Preferences (**Edit** → **Preferences**)
2. Go to **Add-ons** tab
3. Find "Procedural Interiors" in the list
4. Click the arrow to expand preference options

## Core Settings

### Asset Library Path
**Purpose**: Location where addon assets are stored and accessed.

- **Default Path**: `~/BlenderAssets/ProceduralInteriors/`
- **Custom Path**: Click folder icon to choose custom location
- **Network Path**: Supports shared network drives for team workflows

:::tip
Use a fast SSD location for better performance when loading assets.
:::

### Generation Quality
**Purpose**: Balance between speed and detail in procedural generation.

- **Draft** (Fast): Quick previews, lower polygon counts
- **Standard** (Balanced): Good quality for most workflows
- **High** (Detailed): Maximum detail for final renders
- **Custom**: Manual control over subdivision levels

### Memory Management
**Purpose**: Control memory usage during generation processes.

- **Conservative**: Lower memory usage, slower generation
- **Balanced**: Default setting for most systems
- **Aggressive**: Faster generation, requires more RAM

## Interface Settings

### Panel Location
Choose where Procedural Interiors panels appear:

- **3D Viewport Sidebar**: Default location (press `N` to toggle)
- **Properties Panel**: Integrated with object properties
- **Custom Tab**: Create dedicated workspace tab

### Overlay Display
Control visual feedback during generation:

- **Show Guidelines**: Display construction guides
- **Show Measurements**: Real-world dimensions overlay
- **Show Asset Previews**: Thumbnail previews during placement

## Asset Browser Integration

### Enable Asset Browser
- ✅ **Enabled**: Full integration with Blender's Asset Browser
- ❌ **Disabled**: Use traditional addon interface only

### Asset Categories
Configure which asset types appear in the browser:

- ✅ **Furniture**: Chairs, tables, storage, etc.
- ✅ **Fixtures**: Lighting, plumbing, electrical
- ✅ **Architectural**: Doors, windows, moldings
- ✅ **Materials**: Procedural material presets
- ✅ **Scenes**: Complete room templates

## Performance Optimization

### Viewport Performance
- **Simplify During Generation**: Reduce viewport complexity
- **Auto LOD**: Automatic level-of-detail based on view distance
- **Culling Distance**: Hide distant objects from viewport

### Render Optimization
- **Auto Render Settings**: Optimize render settings for interiors
- **Material Optimization**: Consolidate similar materials
- **Geometry Optimization**: Remove hidden faces and optimize meshes

## Advanced Settings

### Developer Options
:::caution
These settings are for advanced users only.
:::

- **Debug Mode**: Enable detailed logging and debug overlays
- **Custom Scripts**: Path to user-defined generation scripts
- **API Access**: Enable external tool integration

### Backup & Recovery
- **Auto Backup**: Automatically save before major operations
- **Backup Location**: Where backup files are stored
- **Backup Retention**: How many backups to keep

## Applying Changes

- **Save Preferences**: Click to save current settings
- **Reset to Defaults**: Restore all settings to default values
- **Import/Export Settings**: Share configurations between installations

## Recommended Settings

### For Beginners
- Quality: **Standard**
- Memory: **Conservative**
- Panel Location: **3D Viewport Sidebar**
- Asset Browser: **Enabled**

### For Production Work
- Quality: **High**
- Memory: **Aggressive** (if you have 16GB+ RAM)
- All optimizations: **Enabled**
- Auto Backup: **Enabled**

### For Team Workflows
- Asset Library: **Network Path**
- Settings: **Export and share** configuration files
- Backup Location: **Shared network drive**

## Next Steps

With preferences configured, you're ready to start [creating your first interior](../how-to-use/overlays).
