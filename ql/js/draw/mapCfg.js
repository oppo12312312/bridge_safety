/*
 * @Description: 
 * @Author: zhongshuai
 * @LastEditors: zhongshuai
 * @Date: 2019-05-01 11:12:05
 * @LastEditTime: 2019-05-01 11:13:46
 */
var mapCfg = {
  "draw": {
    "toolbar": {
      "actions": {
        "title": "取消绘制",
        "text": "取消"
      },
      "buttons": {
        "circle": "Draw a circle",
        "circlemarker": "Draw a circlemarker",
        "marker": "绘制一个点",
        "polygon": "Draw a polygon",
        "polyline": "Draw a polyline",
        "rectangle": "Draw a rectangle"
      },
      "finish": {
        "text": "Finish",
        "title": "Finish drawing"
      },
      "undo": {
        "text": "Delete last point",
        "title": "Delete last point drawn"
      }
    },
    "handlers": {
      "circle": {
        "tooltip": {
          "start": "Click and drag to draw circle."
        },
        "radius": "Radius"
      },
      "circlemarker": {
        "tooltip": {
          "start": "Click map to place circle marker."
        }
      },
      "marker": {
        "tooltip": {
          "start": "单击地图绘制点"
        }
      },
      "polygon": {
        "tooltip": {
          "start": "Click to start drawing shape.",
          "cont": "Click to continue drawing shape.",
          "end": "Click first point to close this shape."
        }
      },
      "polyline": {
        "error": "<strong>Error:</strong> shape edges cannot cross!",
        "tooltip": {
          "start": "Click to start drawing line.",
          "cont": "Click to continue drawing line.",
          "end": "Click last point to finish line."
        }
      },
      "rectangle": {
        "tooltip": {
          "start": "Click and drag to draw rectangle."
        }
      },
      "simpleshape": {
        "tooltip": {
          "end": "Release mouse to finish drawing."
        }
      }
    }
  },
  "edit": {
    "toolbar": {
      "actions": {
        "save": {
          "title": "Save changes",
          "text": "保存"
        },
        "cancel": {
          "title": "Cancel editing, discards all changes",
          "text": "取消"
        },
        "clearAll": {
          "title": "删除所有",
          "text": "删除所有"
        }
      },
      "buttons": {
        "edit": "Edit layers",
        "editDisabled": "No layers to edit",
        "remove": "Delete layers",
        "removeDisabled": "No layers to delete"
      }
    },
    "handlers": {
      "edit": {
        "tooltip": {
          "text": "拖动图标改变位置.",
          "subtext": "单击取消按钮取消修改."
        }
      },
      "remove": {
        "tooltip": {
          "text": "点击要素删除"
        }
      }
    }
  }
}